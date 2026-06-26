'use client'
import Link from "next/link";
import { Button } from "@heroui/react";
import { LuShieldAlert, LuArrowLeft, LuHouse } from "react-icons/lu";
import { useRouter } from "next/navigation";

const UnauthorizedPage = () => {
    const router = useRouter();
  return (
    <section className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-16">
      <div className="w-full max-w-2xl rounded-[32px] border border-gray-200 bg-white p-10 text-center shadow-sm">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-50">
          <LuShieldAlert className="text-5xl text-[#DC2626]" />
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#DC2626]">
          Error 401
        </p>

        <h1 className="mt-3 font-logo text-3xl sm:text-5xl text-[#130505]">
          Unauthorized Access
        </h1>

        <p className="mx-auto mt-5 max-w-lg sm:text-lg leading-8 text-gray-500">
          Sorry, you don't have permission to access this page.
          Please sign in with an authorized account or return to the homepage.
        </p>

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

export default UnauthorizedPage;