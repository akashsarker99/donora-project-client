import { FaHeart } from "react-icons/fa6";
import DonateModal from "./DonateModal";
import { LuDroplets } from "react-icons/lu";

const statusColors = {
  pending:
    "bg-yellow-50 text-yellow-700 border border-yellow-300 ",
  inprogress:
    "bg-blue-50 text-blue-700 border border-blue-300 ",
  done:
    "bg-green-50 text-green-700 border border-green-300 ",
    cancelled:
    "bg-gray-200 text-gray-600 border-gray-200 "
};

const RequestDetails = ({ request, user }) => {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow-sm">
        <div className="h-2 bg-[#FF2355]" />

        <div className="p-8">
          <div className="mb-10 flex items-start justify-between">
            <div>
              <h1 className="font-logo text-5xl text-[#130505]">
                Blood Request Details
              </h1>

              <div
                className={`mt-4 inline-flex rounded-full px-4 py-1 text-lg font-medium capitalize ${
                  statusColors[request.requestStatus]
                }`}
              >
                {request.requestStatus}
              </div>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4  py-1 font-semibold text-[#B91C1C]">
              <LuDroplets></LuDroplets>  {request.bloodGroup}
            </div>
          </div>

          <div className="grid gap-y-10 gap-x-16 md:grid-cols-2">
            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-400">
                Recipient Name
              </p>

              <p className="text-xl text-[#130505]">
                {request.recipientName}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-400">
                Hospital
              </p>

              <p className="text-xl text-[#130505]">
                {request.hospital}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-400">
                Location
              </p>

              <p className="text-xl text-[#130505]">
                {request.district}, {request.upazila}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-400">
                Full Address
              </p>

              <p className="text-xl text-[#130505]">
                {request.address}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-400">
                Donation Date
              </p>

              <p className="text-xl text-[#130505]">
                {request.donationDate}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-400">
                Donation Time
              </p>

              <p className="text-xl text-[#130505]">
                {request.donationTime}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-400">
                Requester
              </p>

              <p className="text-xl text-[#130505]">
                {request.requesterName}
              </p>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold uppercase tracking-wide text-gray-400">
                Requester Email
              </p>

              <p className="text-xl text-[#130505]">
                {request.requesterEmail}
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-gray-50 p-6">
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-gray-400">
              Request Message
            </h3>

            <p className="text-lg leading-8 text-gray-700">
              {request.message}
            </p>
          </div>

          {request.requestStatus === "pending" && (
            <div className="mt-10">
              <DonateModal
                request={request}
                user={user}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;