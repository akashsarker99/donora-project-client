'use client'

import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const DashboardNavbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  return (
    <header className="flex h-20 items-center justify-between border-b border-gray-100 bg-white px-6">
      <h1 className="text-xl font-bold text-[#130505]">
        Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="rounded-full border border-red-200 bg-red-50 px-4 py-1 text-md font-semibold text-[#DC2626]">
          {user?.role || "Donor"}
        </span>

        {user?.image ? (
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image
              src={user?.image}
              alt={user?.name}
              height={44}
              width={44}
              className="h-12 w-12 object-cover"
            />
          </div>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C70000] text-lg font-bold text-white">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
    </header>
  );
};

export default DashboardNavbar;