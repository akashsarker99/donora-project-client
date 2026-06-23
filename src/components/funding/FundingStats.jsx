import { getPayments } from '@/lib/api/payments';
import React from 'react';

const FundingStats = async () => {
  const donations = await getPayments();
  const donationAmount = donations.reduce((acc, donation)=>{
    return acc + Number(donation.amount);
  },0)
    return (
        <div className="grid gap-4 md:grid-cols-2  sm:w-1/2">
  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm text-gray-500">
      Total Raised
    </p>

    <h3 className="mt-2 text-3xl font-bold text-[#C70000]">
     {donationAmount} Tk
    </h3>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow-sm">
    <p className="text-sm text-gray-500">
      Total Donors
    </p>

    <h3 className="mt-2 text-3xl font-bold text-[#C70000]">
      {donations.length}
    </h3>
  </div>

</div>
    );
};

export default FundingStats;