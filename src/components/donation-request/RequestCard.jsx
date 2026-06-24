import { Button } from "@heroui/react";
import Link from "next/link";
import {
  LuMapPin,
  LuCalendar,
  LuClock3,
  LuEye,
  LuDroplets,
} from "react-icons/lu";

const bloodGroupColors = {
  "A+": "from-red-500 to-red-600",
  "A-": "from-red-700 to-red-800",
  "B+": "from-orange-500 to-orange-600",
  "B-": "from-orange-700 to-orange-800",
  "AB+": "from-purple-500 to-fuchsia-600",
  "AB-": "from-purple-700 to-purple-800",
  "O+": "from-pink-600 to-rose-700",
  "O-": "from-pink-800 to-rose-900",
};

export default function RequestCard({request}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-red-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div
        className={`bg-linear-to-r ${
          bloodGroupColors[request.bloodGroup]
        } p-5 text-white`}
      >
        <div className="flex justify-between items-center">
          <h3 className="font-logo text-4xl font-bold">
          {request.bloodGroup}
        </h3>
          <LuDroplets className="text-2xl"></LuDroplets>
        </div>
        <p className="mt-1 font-medium text-xl">
          {request.recipientName}
        </p>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-center gap-2 text-gray-600">
          <LuMapPin size={16} />
          {request.upazila}, {request.district}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LuCalendar size={16} />
          {request.donationDate}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <LuClock3 size={16} />
          {request.donationTime}
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-gray-600">
  {request.message}
</p>
       <Link href={`/donation-requests/${request._id}`}> <Button className="mt-4 flex w-full  items-center justify-center gap-2 rounded-full bg-red-50 py-3 font-medium text-[#C70000] transition hover:bg-red-100">
          <LuEye size={18} />
          View Details
        </Button></Link>
      </div>
    </div>
  );
}