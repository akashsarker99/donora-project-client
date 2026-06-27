import RequestBanner from '@/components/donation-request/RequestBanner';
import FeaturedCard from '@/components/FeatureCard';
import { donationRequestsPage } from '@/lib/api/donationRequest';
import { getUserSession } from '@/lib/core/session';
import { Pagination, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { LuDroplets, LuPlus } from 'react-icons/lu';



const DonationRequestPage = async ({searchParams}) => {
  const {page=1} = await searchParams;
  const user = await getUserSession();
  const requestsData = await donationRequestsPage(page);
  const requests = requestsData.data;
  const pageNumber = requestsData.pageNumber;
  const totalPages = requestsData.totalPages;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

    return (
        <div className="space-y-4 p-4 md:p-6">
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
          href={`/dashboard/${user?.role}/create-request`}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#DC2626] px-6 py-3 font-semibold text-white transition hover:bg-[#B91C1C]"
        >
          <LuPlus size={18} />
          Create Request
        </Link>
      </div>
    </div> ) :  ( <div className="py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {requests.map((request) => (
      <FeaturedCard key={request._id}
      request={request}></FeaturedCard>
  ))}
    </div>
     )
   }

       </div>

     <div className="flex justify-center mb-8">
        <Table.Footer>
        <Pagination size="lg">
          <Pagination.Content>
            <Pagination.Item>
              <Pagination.Previous
                isDisabled={pageNumber === 1}
          
              >
                <Link className="flex gap-2" href={`/donation-requests?page=${pageNumber-1}`}>
                <Pagination.PreviousIcon />
                Prev</Link>
              </Pagination.Previous>
            </Pagination.Item>

            {pages.map((p) => (
              <Pagination.Item key={p}>
               <Link href={`/donation-requests?page=${p}`}>
                <Pagination.Link className={`${p===pageNumber && 'bg-red-500 text-white'}`} isActive={p === pageNumber}>
                  {p}
                </Pagination.Link>
               </Link>
              </Pagination.Item>
            ))}
            <Pagination.Item>
              <Pagination.Next
                isDisabled={pageNumber === totalPages}
              >
                  <Link className="flex gap-2 text-red-500" href={`/donation-requests?page=${pageNumber+1}`}>
                Next
                <Pagination.NextIcon />
                </Link>
              </Pagination.Next>
            </Pagination.Item>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
     </div>
        </div>
    );
};

export default DonationRequestPage;