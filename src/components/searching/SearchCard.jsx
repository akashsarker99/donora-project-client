import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuDroplets, LuMapPin, LuMail } from "react-icons/lu";

const SearchCard = ({ donor }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="bg-linear-to-r from-[#DC2626] to-[#B91C1C] px-6 py-5 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {donor.image ? (
              <Image
                src={donor.image}
                alt={donor.name}
                width={64}
                height={64}
                className="h-16 w-16 rounded-full border-2 border-white object-cover"
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white text-2xl font-bold text-[#DC2626]">
                {donor.name?.charAt(0)}
              </div>
            )}

            <div>
              <h2 className="font-logo text-2xl">
                {donor.name}
              </h2>

              <p className="text-sm text-red-100">
                Active Donor
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white/15 px-4 py-3 text-center backdrop-blur">
            <LuDroplets className="mx-auto text-xl" />

            <h3 className="mt-1 font-logo text-3xl">
              {donor.bloodGroup}
            </h3>
          </div>
        </div>
      </div>
      <div className="space-y-5 p-6">
        <div className="flex items-center gap-3 text-gray-600">
          <LuMapPin className="text-xl text-[#DC2626]" />

          <span>
            {donor.district}, {donor.upazila}
          </span>
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <LuMail className="text-xl text-[#DC2626]" />

          <span className="truncate">
            {donor.email}
          </span>
        </div>

        <Button
          as={Link}
          href={`/donor/${donor._id}`}
          color="danger"
          radius="full"
          className="w-full"
        >
          View Profile
        </Button>
      </div>
    </div>
  );
};

export default SearchCard;