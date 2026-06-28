import { getMyDonationRequestsByEmail } from "@/lib/api/donationRequest";
import { getUserSession } from "@/lib/core/session";
import Link from "next/link";
import { LuDroplets, LuPlus } from "react-icons/lu";
import RecentRequestsTable from "./RecentRequestTable";
import { getUserByEmail } from "@/lib/api/user";

const DonorDashboard = async () => {
    const user = await getUserSession()
    const userRole = await getUserByEmail(user?.email);
    const requests = await getMyDonationRequestsByEmail(user?.email);
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="rounded-3xl bg-linear-to-r from-[#c70000] to-[#ac0000] p-6 md:p-8 text-white">
        <p className="text-lg text-white/90">
          Welcome back,
        </p>

        <h2 className="font-logo mt-2 text-3xl md:text-4xl font-bold">
          {user?.name}!
        </h2>

        <p className="mt-3 text-base">
          Donor Account · Status:
          <span className={`ml-1 capitalize font-medium  ${userRole?.status === 'active' ? "text-green-300" : "text-red-500"}`}>
              {userRole?.status}
          </span>
        </p>
      </div>

      <RecentRequestsTable requests={requests} />

      {requests.length === 0 && (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl bg-white p-6 text-center shadow-sm">
          <LuDroplets className="mb-4 text-5xl text-red-200" />

          <h3 className="text-2xl font-semibold text-slate-700">
            No donation requests yet
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Create your first request to find a blood donor.
          </p>

          <Link
            href="/dashboard/create-request"
            className="mt-6 flex items-center gap-2 rounded-2xl bg-[#C70000] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#A60000]"
          >
            <LuPlus size={18} />
            Create Request
          </Link>
        </div>
      )}
    </div>
  );
};

export default DonorDashboard;