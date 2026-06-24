'use client'
import { deleteDonationRequest } from "@/lib/actions/deleteDonation";
import { updateDonationRequest } from "@/lib/actions/donationRequest";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LuDroplets,
  LuEye,
  LuPencil,
  LuTrash2,
  LuX,
} from "react-icons/lu";
import { toast } from "react-toastify";

const statusStyles = {
  pending:
    "bg-yellow-50 text-yellow-700 border-yellow-300",
  inprogress:
    "bg-blue-50 text-blue-700 border-blue-300",
  done:
    "bg-green-50 text-green-700 border-green-300",
  cancelled:
    "bg-gray-100 text-gray-600 border-gray-200",
};

const RecentRequestsTable = ({requests}) => {
  const router = useRouter();
  const filteredRequests = requests?.slice(0, 3) || [];

  const handleDone = async (id) => {
    await updateDonationRequest(id, {requestStatus: "done"});
    router.refresh();
  };
  
  const handleCancel = async (id) => {
    await updateDonationRequest(id, {requestStatus: "cancelled"});
    router.refresh();
  };

const handleDelete = async (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this request?"
  );

  if (!confirmed) return;

  try {
    await deleteDonationRequest(id);
    toast.success("Request deleted successfully");
    router.refresh();

  } catch (error) {
    toast.error(
      "Failed to delete request"
    );
  }
};

  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
        <div>
          <h2 className="text-2xl font-bold text-[#130505]">
            Recent Requests
          </h2>

          <p className="mt-1 text-gray-500">
            Your latest donation requests
          </p>
        </div>

        <Link
          href="/dashboard/donor/requests"
        >
          <span className="rounded-full bg-red-600 px-6 py-2 font-semibold text-white transition hover:bg-red-700">View All</span>
        </Link>
      </div>
     <div className="hidden md:block overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-sm">
  <table className="w-full">
    <thead className="border-b border-gray-100 bg-gray-50">
      <tr>
        <th className="px-4 py-4 text-left text-sm font-semibold text-gray-500">
          RECIPIENT
        </th>

        <th className="px-4 py-4 text-left text-sm font-semibold text-gray-500">
          LOCATION
        </th>

        <th className="px-4 py-4 text-left text-sm font-semibold text-gray-500">
          DATE
        </th>

        <th className="px-4 py-4 text-left text-sm font-semibold text-gray-500">
          BLOOD
        </th>

        <th className="px-4 py-4 text-left text-sm font-semibold text-gray-500">
          STATUS
        </th>

        <th className="px-4 py-4 text-center text-sm font-semibold text-gray-500">
          ACTIONS
        </th>
      </tr>
    </thead>

    <tbody>
      {filteredRequests.map((request) => (
        <tr
          key={request._id}
          className="border-b border-gray-100 hover:bg-gray-50"
        >
          <td className="px-4 py-4 font-semibold text-[#130505]">
            {request.recipientName}
          </td>

          <td className="px-4 py-4 text-gray-600">
            {request.district}, {request.upazila}
          </td>

          <td className="px-4 py-4 text-gray-600">
            {request.donationDate}
          </td>

          <td className="px-4 py-4">
            <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-[#C70000]">
              <LuDroplets size={14} />
              {request.bloodGroup}
            </span>
          </td>

          <td className="px-4 py-4">
            <span
              className={`inline-flex min-w-[110px] justify-center rounded-full border px-3 py-1 text-sm font-medium capitalize ${
                statusStyles[request.requestStatus]
              }`}
            >
              {request.requestStatus}
            </span>
          </td>

         <td className="px-4 py-4">
  <div className="flex items-center justify-center gap-1">
    <Link
      href={`/donation-requests/${request._id}`}
      className="rounded-lg p-2 text-blue-600 hover:bg-blue-50"
    >
      <LuEye size={18} />
    </Link>

    {request.requestStatus === "pending" && (
      <>
        <Link
          href={`/dashboard/my-requests/edit/${request._id}`}
          className="rounded-lg p-2 text-green-600 hover:bg-green-50"
        >
          <LuPencil size={18} />
        </Link>

        <button
          onClick={() => handleDelete(request._id)}
          className="rounded-lg p-2 text-red-600 hover:bg-red-50"
        >
          <LuTrash2 size={18} />
        </button>
      </>
    )}

    {request.requestStatus === "inprogress" && (
      <>
        <button
          onClick={() => handleDone(request._id)}
          className="rounded-lg p-2 text-green-600 hover:bg-green-50"
        >
          ✓
        </button>

        <button
          onClick={() => handleCancel(request._id)}
          className="rounded-lg p-2 text-orange-600 hover:bg-orange-50"
        >
          <LuX size={18} />
        </button>
      </>
    )}

    {(request.requestStatus === "done" ||
      request.requestStatus === "cancelled") && (
      <button
        onClick={() => handleDelete(request._id)}
        className="rounded-lg p-2 text-red-600 hover:bg-red-50"
      >
        <LuTrash2 size={18} />
      </button>
    )}
  </div>
</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div className="grid gap-4 md:hidden">
  {filteredRequests.map((request) => (
    <div
      key={request._id}
      className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-[#130505]">
            {request.recipientName}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {request.district}, {request.upazila}
          </p>
        </div>

        <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-sm font-medium text-[#C70000]">
          {request.bloodGroup}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {request.donationDate}
        </p>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-medium capitalize ${
            statusStyles[request.requestStatus]
          }`}
        >
          {request.requestStatus}
        </span>
      </div>

      {request.requestStatus === "inprogress" && (
        <p className="mt-3 text-sm text-blue-600">
          Donor: {request.donorName}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Link
          href={`/donation-requests/${request._id}`}
          className="flex-1 rounded-xl bg-blue-50 py-2 text-center text-blue-600"
        >
          View
        </Link>

        {request.requestStatus === "pending" && (
          <>
            <Link
              href={`/dashboard/my-requests/edit/${request._id}`}
              className="flex-1 rounded-xl bg-green-50 py-2 text-center text-green-600"
            >
              Edit
            </Link>

            <button
              onClick={() => handleDelete(request._id)}
              className="flex-1 rounded-xl bg-red-50 py-2 text-red-600"
            >
              Delete
            </button>
          </>
        )}

        {request.requestStatus === "inprogress" && (
  <>
    <button
      onClick={() => handleDone(request._id)}
      className="flex-1 rounded-xl bg-green-50 py-2 text-green-600"
    >
      Done
    </button>

    <button
      onClick={() => handleCancel(request._id)}
      className="flex-1 rounded-xl bg-orange-50 py-2 text-orange-600"
    >
      Cancel
    </button>
  </>
)}
{(request.requestStatus === "done" ||
  request.requestStatus === "cancelled") && (
  <button
    onClick={() => handleDelete(request._id)}
    className="flex-1 rounded-xl bg-red-50 py-2 text-red-600"
  >
    Delete
  </button>
)}
      </div>
    </div>
  ))}
</div>
</div>
  );
};

export default RecentRequestsTable;
