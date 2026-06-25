'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LuCalendar,
  LuClock,
  LuHospital,
  LuMapPin,
  LuDroplets,
  LuEye,
} from "react-icons/lu";

const FeaturedCard = ({ request }) => {
    const pathName = usePathname();
  return (
    <div className="rounded-3xl border border-gray-100 border-t-6 border-t-[#c70000] bg-white p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

      <div className="flex items-center justify-between">

       <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-4 py-1 text-xl font-medium text-[#C70000]">
                     <LuDroplets size={17} />
                     {request.bloodGroup}
                   </span>

        <span className="rounded-full bg-yellow-100 px-4 py-2 text-xs font-bold uppercase text-yellow-700">
          {
            pathName === "/donation-requests" ? "Pending" : "Urgent"
          }
        </span>

      </div>

      <h3 className="mt-6 text-2xl font-bold text-[#130505]">
        {request.recipientName}
      </h3>

      <div className="mt-4 space-y-3 text-gray-600">

        <div className="flex items-center gap-3">
          <LuHospital className="text-[#C70000]" />
          {request.hospital}
        </div>

        <div className="flex items-center gap-3">
          <LuMapPin className="text-[#C70000]" />
          {request.upazila}, {request.district}
        </div>

        <div className="flex items-center gap-3">
          <LuCalendar className="text-[#C70000]" />
          {request.donationDate}
        </div>

        <div className="flex items-center gap-3">
          <LuClock className="text-[#C70000]" />
          {request.donationTime}
        </div>

      </div>

      <div className="flex justify-center">
        <Link
        href={`/donation-requests/${request._id}`}
        className="mt-8 w-full justify-center px-4 py-2 rounded-full inline-flex items-center gap-2 bg-red-50 font-semibold text-[#c70000] transition-all hover:bg-red-100 "
      >
        View Details

        <LuEye className="transition hover:scale-120" />

      </Link>
      </div>

    </div>
  );
};

export default FeaturedCard;