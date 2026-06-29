"use client";

import DeleteModal from "@/components/DeleteModal";
import PaginationComponent from "@/components/PaginationComponent";
import { deleteDonationRequest } from "@/lib/actions/deleteDonation";
import { updateDonationRequest } from "@/lib/actions/donationRequest";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {
  LuDroplets,
  LuTrash2,
  LuFilter,
  LuEye,
  LuPencil,
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

const MyRequestsPage = ({requests, pageNumber, totalPages, pages}) => {

  const pathName = usePathname();
    const router = useRouter();
  const [statusFilter, setStatusFilter] = useState("all");

 const filteredRequests = statusFilter === "all" ? requests || [] : (requests || []).filter(
        request =>
          request.requestStatus === statusFilter
      );

const handleDone = async (id) => {
  await updateDonationRequest(id, {requestStatus: "done"});
  router.refresh();
};

const handleCancel = async (id) => {
  await updateDonationRequest(id, {requestStatus: "cancelled"});
  router.refresh();
};

const handleDelete = async (id) => {
  try {
    const result = await deleteDonationRequest(id);
    console.log(result)
    toast.success("Request deleted successfully");
    router.refresh();
    
    
  } catch (error) {
    toast.error(
      "Failed to delete request"
    );
  }
};
  return (
    <section className="mx-auto my-8 max-w-7xl px-4 md:px-6">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {
          pathName === "/dashboard/requests" ? (
             <div>
          <h1 className="font-logo text-3xl md:text-4xl text-[#130505]">
            My Donation Requests
          </h1>

          <p className="mt-2 text-gray-500">
            Manage and track all of your blood
            donation requests.
          </p>
        </div> 
          ): (
             <div>
          <h1 className="font-logo text-3xl md:text-4xl text-[#130505]">
             All Donation Requests
          </h1>

          <p className="mt-2 text-gray-500">
            Manage and track all of the public blood
            donation requests.
          </p>
        </div>
          )
        }

        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
            <LuFilter
              size={18}
              className="text-gray-500"
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="h-12 rounded-full border border-gray-200 bg-white px-5 outline-none shadow-sm"
          >
            <option value="all">
              All Status
            </option>
            <option value="pending">
              Pending
            </option>
            <option value="inprogress">
              In Progress
            </option>
            <option value="done">
              Done
            </option>
            <option value="cancelled">
              Cancelled
            </option>
          </select>
        </div>
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
              className={`inline-flex min-w-[110px] justify-center rounded-full border px-3 py-1 text-sm font-medium uppercase ${
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
          href={`/dashboard/edit-request/${request._id}`}
          className="rounded-lg p-2 text-green-600 hover:bg-green-50"
        >
          <LuPencil size={18} />
        </Link>

       <DeleteModal request={request} handleDelete={handleDelete}></DeleteModal>
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
          className={`rounded-full border px-3 py-1 text-xs font-medium uppercase ${
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
          className="flex-1 flex justify-center py-3 rounded-xl bg-blue-50  text-center text-blue-600"
        >
          <LuEye/>
        </Link>

        {request.requestStatus === "pending" && (
          <>
            <Link
              href={`/dashboard/edit-request/${request._id}`}
              className="flex-1 flex rounded-xl bg-green-50 py-3 justify-center text-green-600"
            >
              <LuPencil></LuPencil>
            </Link>

            <span
              className="flex-1 flex justify-center rounded-xl bg-red-50 cursor-pointer text-red-600 "
            >
                <DeleteModal request={request} handleDelete={handleDelete}></DeleteModal>
            </span>
          </>
        )}

        {request.requestStatus === "inprogress" && (
  <>
    <button
      onClick={() => handleDone(request._id)}
      className="flex-1 rounded-xl bg-green-50 py-2 text-green-600 cursor-pointer"
    >
       ✓
    </button>

    <button
      onClick={() => handleCancel(request._id)}
      className="flex-1 rounded-xl bg-orange-50 py-3 flex justify-center cursor-pointer text-orange-600"
    >
       <LuX size={18} />
    </button>
  </>
)}
{(request.requestStatus === "done" ||
  request.requestStatus === "cancelled") && (
     <span
              className="flex-1 flex justify-center rounded-xl bg-red-50 cursor-pointer text-red-600 "
            >
                <DeleteModal request={request} handleDelete={handleDelete}></DeleteModal>
            </span>
)}
      </div>
    </div>
  ))}
</div>

    {
      pathName !== "/dashboard/requests" && (
          <div className="flex justify-center my-8">
       <PaginationComponent pathName={pathName} pageNumber={pageNumber} totalPages={totalPages} pages={pages}></PaginationComponent>
     </div>
      )
    }
    </section>
  );
};

export default MyRequestsPage;
