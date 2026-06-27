"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LuChevronDown, LuLayoutDashboard, LuLogOut } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { handleLogout } from "@/lib/core/logout";
import { useRouter } from "next/navigation";


const UserDropdown = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;
  if (!user) return null;
  
  const dashboardLinks = {
    donor: '/dashboard/donor',
    volunteer: '/dashboard/volunteer',
    admin: '/dashboard/admin',
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="group flex items-center gap-3 rounded-full px-2 py-1 transition-all duration-200 hover:bg-red-50"
      >
        {user.image ? (
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-[#C70000] transition duration-300 group-hover:scale-105">
            <Image
              src={user.image}
              alt={user.name}
              width={44}
              height={44}
              className="h-full w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#C70000] font-semibold text-white transition duration-300 group-hover:scale-105">
            {user.name?.charAt(0).toUpperCase()}
          </div>
        )}

        <span className="hidden font-medium text-slate-700 transition-colors duration-200 group-hover:text-[#C70000] md:block">
          {user.name?.split(" ")[0]}
        </span>

        <LuChevronDown
          className={`text-slate-500 transition duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-16 z-50 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl p-2">
          <div className="mb-1.5">
            <div className="flex items-center gap-3">

             <Link
  href={`/dashboard/profile`}
  className="block w-full rounded-xl p-3 transition-all duration-200 hover:bg-red-50"
>
  <h3 className="font-semibold text-slate-800 transition-colors duration-200 hover:text-[#C70000]">
    {user.name}
  </h3>

  <span className="mt-1 inline-block rounded-full border uppercase border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-[#DC2626]">
    {user.role || "Donor"}
  </span>
</Link>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-1.5">
            <Link
              href= {`${dashboardLinks[user?.role || "donorDashboard"]}`}
              className="flex items-center gap-3 px-4 py-3 text-slate-600 transition-all duration-200 hover:bg-red-50 hover:text-[#C70000] rounded-2xl"
            >
              <LuLayoutDashboard className="text-lg" />
              Dashboard
            </Link>

             <Link
              href= {`${dashboardLinks[user?.role || "donorDashboard"]}`}
              className="flex items-center gap-3 px-4 py-3 text-slate-600 transition-all duration-200 hover:bg-red-50 hover:text-[#C70000] rounded-2xl"
            >
              <LuLayoutDashboard className="text-lg" />
               Give Fund
            </Link>

            <button onClick={()=>handleLogout(router)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-[#DC2626] transition-all duration-200 hover:bg-red-50 hover:pl-5 rounded-2xl"
            >
              <LuLogOut className="text-lg" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;