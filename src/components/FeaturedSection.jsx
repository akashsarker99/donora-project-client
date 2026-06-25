import Link from "next/link";
import FeaturedCard from "./FeatureCard";
import { getAllDonationRequests } from "@/lib/api/donationRequest";
import { LuArrowRight } from "react-icons/lu";

const FeaturedSection = async () => {
    const requestData = await getAllDonationRequests();
    const requests = [...requestData].filter(request => request.requestStatus === "pending").slice(-6)
  return (
    <section className="py-18">
      <div className="mx-auto container px-4">

        <div className="mb-14 text-center">

          <h2 className="mt-5 font-logo text-5xl text-[#130505]">
            Featured Donation Requests
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Every donation has the power to save a life.
            Explore urgent blood requests and become
            someone's hero today.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {requests.map(request => (
            <FeaturedCard
              key={request._id}
              request={request}
            />
          ))}

        </div>

        <div className="mt-6 text-center">

         <Link
        href={`/donation-requests`}
        className=" inline-flex items-center gap-2 font-semibold text-[#c70000] transition-all hover:text-[#ac0000] text-xl underline"
      >
        View All Requests

        <LuArrowRight className="transition hover:translate-x-1" />

      </Link>

        </div>

      </div>
    </section>
  );
};

export default FeaturedSection;