import Link from 'next/link';
import React from 'react';
import { LuDroplets, LuPlus } from 'react-icons/lu';
import MyRequestsPage from '@/app/dashboard/requests/MyRequest';


const AllPublicRequest = async ({requests, pages, pageNumber, totalPages}) => {
    return (
        <div>
                 <MyRequestsPage requests={requests} pageNumber={pageNumber} 
                 totalPages={totalPages} pages={pages}></MyRequestsPage>
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

export default AllPublicRequest;