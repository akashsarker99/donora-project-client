import React from 'react';

const FundingStats = () => {
    return (
        <div className="grid gap-4 md:grid-cols-3">
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm text-gray-500">
      Total Raised
    </p>

    <h3 className="mt-2 text-3xl font-bold text-[#C70000]">
      6,600 Tk
    </h3>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm text-gray-500">
      Total Donors
    </p>

    <h3 className="mt-2 text-3xl font-bold text-[#C70000]">
      8
    </h3>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm text-gray-500">
      This Month
    </p>

    <h3 className="mt-2 text-3xl font-bold text-[#C70000]">
      2,400 tk
    </h3>
  </div>
</div>
    );
};

export default FundingStats;