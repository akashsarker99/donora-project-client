import { LuHeart } from "react-icons/lu";

const FundingBanner = () => {
    return (
<div className="rounded-3xl bg-linear-to-r from-[#C70000] to-[#9D0000] p-6 md:p-8 text-white">
  <div className="max-w-2xl">
    <div className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-red-100">
      <LuHeart />
      Support Us
    </div>

    <h1 className="font-logo text-4xl md:text-5xl">
      Blood Donation Fund
    </h1>

    <p className="mt-4 text-base text-red-100">
      Your financial contribution helps us maintain the platform,
      organize blood drives, and reach more donors across Bangladesh.
    </p>
  </div>
</div>
    );
};

export default FundingBanner;