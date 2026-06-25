import { FaHeart } from "react-icons/fa6";
import DonateModal from "./DonateModal";
import { LuDroplets } from "react-icons/lu";

const statusColors = {
  pending: "bg-yellow-50 text-yellow-700 border border-yellow-300 ",
  inprogress: "bg-blue-50 text-blue-700 border border-blue-300 ",
  done: "bg-green-50 text-green-700 border border-green-300 ",
  cancelled: "bg-gray-200 text-gray-600 border-gray-200 ",
};

const RequestDetails = ({ request, user }) => {
  return (
  <div className="mx-auto max-w-6xl py-8">
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      <div className="bg-gradient-to-r from-[#DC2626] to-[#B91C1C] p-8 text-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-red-100">
              Blood Donation Request
            </p>

            <h1 className="mt-2 font-logo text-4xl">
              {request.recipientName}
            </h1>

            <p className="mt-2 text-red-100">
              {request.hospital}
            </p>

            <span
              className={`mt-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold capitalize ${statusColors[request.requestStatus]}`}
            >
              {request.requestStatus}
            </span>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-lg">
  <div className="flex items-center gap-4">
    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
      <LuDroplets className="text-3xl text-[#DC2626]" />
    </div>

    <div>
      <p className="text-sm font-medium uppercase tracking-wider text-gray-500">
        Blood Group
      </p>

      <h2 className="font-logo text-5xl text-[#DC2626]">
        {request.bloodGroup}
      </h2>
    </div>
  </div>
</div>
        </div>
      </div>

      <div className="grid gap-8 p-8 lg:grid-cols-3">

        <div className="space-y-6 lg:col-span-2">

          <div className="rounded-3xl border border-gray-100 p-6">
            <h2 className="mb-6 text-xl font-bold text-[#130505]">
              Request Information
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Hospital
                </p>

                <p className="mt-2 font-medium text-[#130505]">
                  {request.hospital}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Location
                </p>

                <p className="mt-2 font-medium text-[#130505]">
                  {request.district}, {request.upazila}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Address
                </p>

                <p className="mt-2 font-medium text-[#130505]">
                  {request.address}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Blood Group
                </p>

                <p className="mt-2 font-medium text-[#C70000]">
                  {request.bloodGroup}
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 p-6">
            <h2 className="mb-6 text-xl font-bold text-[#130505]">
              Donation Schedule
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Donation Date
                </p>

                <p className="mt-2 font-medium text-[#130505]">
                  {request.donationDate}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Donation Time
                </p>

                <p className="mt-2 font-medium text-[#130505]">
                  {request.donationTime}
                </p>
              </div>

            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
            <h2 className="mb-5 text-xl font-bold text-[#130505]">
              Request Message
            </h2>

            <p className="leading-8 text-gray-700">
              {request.message}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-gray-100 p-6">
            <h3 className="mb-5 text-lg font-bold text-[#130505]">
              Requester Details
            </h3>

            <div className="space-y-4">

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Name
                </p>

                <p className="mt-1 font-medium">
                  {request.requesterName}
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-600">
                  Email
                </p>

                <p className="mt-1 break-all font-medium">
                  {request.requesterEmail}
                </p>
              </div>

            </div>
          </div>

          {(request.requestStatus === "inprogress" ||
            request.requestStatus === "done") && (
            <div className="rounded-3xl border border-gray-100 p-6">
              <h3 className="mb-5 text-lg font-bold text-[#130505]">
                Donor Details
              </h3>

              <div className="space-y-4">

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Name
                  </p>

                  <p className="mt-1 font-medium">
                    {request.donorName}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Email
                  </p>

                  <p className="mt-1 break-all font-medium">
                    {request.donorEmail}
                  </p>
                </div>

              </div>
            </div>
          )}

          {request.requestStatus === "pending" && (
            <DonateModal
              request={request}
              user={user}
            />
          )}
        </div>

      </div>
    </div>
  </div>
);
};

export default RequestDetails;
