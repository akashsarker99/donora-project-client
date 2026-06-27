import React from "react";
import FundModal from "./FundModal";
import { getPayments } from "@/lib/api/payments";
import Image from "next/image";

const RecentContributors = async () => {
  const donations = await getPayments();

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-logo text-3xl text-[#130505]">
            Recent Contributions
          </h2>

          <p className="mt-1 text-gray-500">
            Every contribution, big or small, makes a difference.
          </p>
        </div>

        <FundModal></FundModal>
      </div>
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm mb-10">
         <div className="overflow-x-auto">
        <table className="min-w-[600px] w-full">
          <thead className="border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm">Donor</th>

              <th className="px-6 py-4 text-left text-sm">Amount</th>

              <th className="px-6 py-4 text-left text-sm">Date</th>
            </tr>
          </thead>

          <tbody>
            {donations.map((donation) => (
              <tr key={donation._id} className="border-b border-gray-100">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-[#C70000] transition duration-300 group-hover:scale-105">
                      {donation.photo ? (
                        <Image
                          src={donation.photo}
                          width={40}
                          height={40}
                          alt={donation.name}
                          className="h-full w-full rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 font-semibold text-[#C70000]">
                          {donation.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <span className="font-medium">{donation.name}</span>
                  </div>
                </td>

                <td className="px-6 py-4 font-semibold text-[#C70000]">
                  {donation.amount} Tk
                </td>

                <td className="px-6 py-4 text-gray-500">
                 {new Date(donation.createdAt).toLocaleDateString("en-GB")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default RecentContributors;
