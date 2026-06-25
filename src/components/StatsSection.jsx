import {
  LuUsers,
  LuHeart,
  LuActivity,
} from "react-icons/lu";


import { getAllUsers } from "@/lib/api/user";
import { getAllDonationRequests } from "@/lib/api/donationRequest";
import { getPayments } from "@/lib/api/payments";
import StatsCard from "./StatsCard";

const StatsSection = async () => {
     const users = await getAllUsers();
      const requests = await getAllDonationRequests();
      const payments = await getPayments();

     const totalDonors = users.filter(user => user.role === "donor").length;
     const totalFunding = payments.reduce((total, payment) => total + Number(payment.amount), 0);
     const activeRequests = requests.filter(request => request.requestStatus === "inprogress").length;
  return (
    <section className="bg-[#ab0000] py-13">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 lg:grid-cols-3">

          <StatsCard
            icon={LuUsers}
            value={(totalDonors ?? 0).toLocaleString()}
            title="Registered Donors"
            subtitle="Available to donate"
          />

          <StatsCard
            icon={LuHeart}
            value={`${(totalFunding ?? 0).toLocaleString()} Tk`}
            title="Total Funding"
            subtitle="Raised by our community"
          />

          <StatsCard
            icon={LuActivity}
            value={activeRequests ?? 0}
            title="Active Requests"
            subtitle="Awaiting donors"
          />

        </div>
      </div>
    </section>
  );
};

export default StatsSection;