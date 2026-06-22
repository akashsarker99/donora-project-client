"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { LuDroplets } from "react-icons/lu";

const Navbar = () => {
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

        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="rounded-full bg-red-50 px-6 py-2 font-medium text-[#DC2626] transition"
          >
            Home
          </Link>

          <Link
            href="/donation-requests"
            className="font-medium text-gray-600 transition hover:text-[#DC2626]"
          >
            Donation Requests
          </Link>

          <Link
            href="/funding"
            className="font-medium text-gray-600 transition hover:text-[#DC2626]"
          >
            Funding
          </Link>

          <Link
            href="/search"
            className="font-medium text-gray-600 transition hover:text-[#DC2626]"
          >
            Search Donors
          </Link>
        </div>

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
      </div>
    </nav>
  );
};

export default Navbar;
