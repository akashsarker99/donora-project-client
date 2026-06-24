import RequestBanner from '@/components/donation-request/RequestBanner';
import RequestCard from '@/components/donation-request/RequestCard';
import { getDonationRequests } from '@/lib/api/donationRequest';
import Link from 'next/link';
import React from 'react';
import { LuDroplets, LuPlus } from 'react-icons/lu';



const DonationRequestPage = async () => {
  const requests = await getDonationRequests();
    return (
        <div className="space-y-6 p-4 md:p-6">
            <RequestBanner></RequestBanner>

            <div>
              {
                requests.length === 0 ? (
                   <div className="flex items-center justify-center rounded-3xl border border-red-100 bg-white p-8">
      <div className="max-w-md text-center py-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
          <LuDroplets
            size={40}
            className="text-[#DC2626]"
          />
        </div>

        <h2 className="font-logo mt-6 text-3xl font-bold text-[#130505]">
          No Requests Found
        </h2>

        <p className="mt-3 text-sm text-gray-500">
          There are currently no active blood donation requests.
          Check back later or create a new request if you need blood.
        </p>

        <Link
          href="/dashboard/donor/create-request"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#DC2626] px-6 py-3 font-semibold text-white transition hover:bg-[#B91C1C]"
        >
          <LuPlus size={18} />
          Create Request
        </Link>
      </div>
    </div> ) :  ( <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {requests.map((request) => (
      <RequestCard key={request._id}
      request={request}></RequestCard>
  ))}
    </div>
     )
   }
       </div>
        </div>
    );
};

export default DonationRequestPage;