import Link from "next/link";
import { FaDroplet } from "react-icons/fa6";

const NotFound = () =>{
  return (
    <section className="flex min-h-screen items-center justify-center bg-linear-to-br from-[#130505] via-[#3A0000] to-[#7A0000] px-6">
      <div className="max-w-2xl text-center">
        <h1
          className="mb-4 text-7xl font-bold text-white md:text-9xl font-logo">404
        </h1>

        <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-lg text-gray-300">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to helping save lives.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-[#DC2626] px-8 py-4 font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Back to Home
          </Link>

          <Link
            href="/donation-requests"
            className="rounded-xl border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Donation Requests
          </Link>
        </div>

        <p className="mt-12 text-sm text-gray-400">
          Donora • Every drop counts, every life matters.
        </p>
      </div>
    </section>
  );
}

export default NotFound