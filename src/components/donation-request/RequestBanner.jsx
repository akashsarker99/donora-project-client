import React from 'react';
import { LuDroplets } from 'react-icons/lu';

const RequestBanner = () => {
    return (
        <div>
            <div className="rounded-3xl bg-linear-to-r from-[#C70000] to-[#A00000] p-6 md:p-8 text-white">
  <div className="max-w-3xl">
    <div className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-red-100">
      <LuDroplets size={16} />
      Active Requests
    </div>

    <h1 className="font-logo text-3xl md:text-4xl">
      Blood Donation Requests
    </h1>

    <p className="mt-3 max-w-2xl text-red-100">
      Browse active blood donation requests and help save lives
      across Bangladesh.
    </p>

    <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-green-400"></span>
      5 Active Requests
    </div>
  </div>
</div>
        </div>
    );
};

export default RequestBanner;