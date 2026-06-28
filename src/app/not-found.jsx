'use client'
import Link from "next/link";
import { Button } from "@heroui/react";
import {
  LuSearchX,
  LuHouse,
  LuArrowLeft,
} from "react-icons/lu";
import { useRouter } from "next/navigation";


const NotFound = () => {
  const router = useRouter();
  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-2xl rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-sm">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
          <LuSearchX className="text-5xl text-[#DC2626]" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#DC2626]">
          ERROR 404
        </p>

        <h1 className="mt-3 font-logo text-3xl sm:text-5xl text-[#130505]">
          Page Not Found
        </h1>

        <p className="mx-auto mt-5 max-w-lg  sm:text-lg leading-8 text-gray-500">
          The page you're looking for doesn't exist, may have been moved,
          or the URL might be incorrect.
        </p>

        <div className="mt-10 flex justify-center">
          <div className="rounded-full bg-red-50 px-5 py-2 text-sm font-medium text-[#DC2626]">
            🩸 Every donation still saves a life.
          </div>
        </div>

         <div className="mt-10 flex justify-center gap-4">

         <Link href={'/'} > <Button className="bg-[#e00101] hover:bg-[#c70000]">
           <LuHouse /> Go Home
          </Button></Link>

          <Button onPress={()=>router.back()} variant="outline">
           <LuArrowLeft /> Go Back
          </Button>

        </div>

      </div>
    </section>
  );
};

export default NotFound;