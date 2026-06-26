"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { LuDroplets } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import UserDropdown from "./UserDropdown";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname()
    const {data: session} = authClient.useSession()
  const user = session?.user;


const activeClass = "rounded-full bg-red-50 px-5 py-2 font-medium text-[#DC2626]";

const inactiveClass = "rounded-full px-6 py-2 font-medium text-gray-600 transition hover:text-[#DC2626]";
  const navLinks = [
  { label: "Home", href: "/" },
  { label: "Donation Requests", href: "/donation-requests" },
  ...(user ? [{ label: "Funding", href: "/funding" }] : []),
  { label: "Search Donors", href: "/searching" },
];
  
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex container items-center justify-between px-4 py-3 lg:px-8">
        
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C70000] hover:bg-[#A60000] shadow-md">
            <LuDroplets className="text-2xl text-white" />
          </div>

          <h1
            className="text-xl font-bold md:text-2xl font-logo">
            Donora
          </h1>
        </Link>

       <div className="hidden items-center gap-4 lg:flex">
  {navLinks.map((item) => (
    <Link
      key={item.href}
      href={item.href}
      className={
        pathname === item.href ||
        (item.href !== "/" && pathname.startsWith(item.href))
          ? activeClass
          : inactiveClass
      }
    >
      {item.label}
    </Link>
  ))}
</div>
       <div>
        {
          user ? (<UserDropdown></UserDropdown>) : 
          (
             <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden font-medium text-gray-700 transition hover:text-[#DC2626] md:block"
          >
            Login
          </Link>

         <Link  href="/register"> <Button
            radius="full"
            className="bg-[#C70000] px-6 font-semibold text-white hover:bg-[#A60000]"
          >
            <LuDroplets></LuDroplets>
            Register
          </Button></Link>
        </div>
          )
        }
       </div>
      </div>
    </nav>
  );
};

export default Navbar;
