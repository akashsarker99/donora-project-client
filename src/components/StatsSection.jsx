import {
  LuUsers,
  LuActivity,
} from "react-icons/lu";

import { RiExchangeFundsLine } from "react-icons/ri";
import StatsCard from "./StatsCard";
import { getStats } from "@/lib/api/stats";

const StatsSection = async () => {
     const stats = await getStats();
  return (
    <section className="bg-linear-to-t from-[#700101] to-[#c70000] py-13">
      <div className="mx-auto container px-4">
        <div className="grid gap-8 lg:grid-cols-3">

          <StatsCard
            icon={LuUsers}
            value={(stats.totalDonors ?? 0).toLocaleString()}
            title="Registered Donors"
            subtitle="Available to donate"
          />

          <StatsCard
            icon={RiExchangeFundsLine}
            value={`${(stats.totalFunding ?? 0).toLocaleString()} Tk`}
            title="Total Funding"
            subtitle="Raised by our community"
          />

          <StatsCard
            icon={LuActivity}
            value={stats.activeRequests ?? 0}
            title="Active Requests"
            subtitle="Awaiting donors"
          />

        </div>
      </div>
    </section>
  );
};

export default StatsSection;