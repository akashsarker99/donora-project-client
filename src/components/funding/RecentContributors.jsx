import React from 'react';
import FundModal from './FundModal';
const donations = [
  {
    id: 1,
    name: "Nadia Rahman",
    amount: 100,
    date: "2026-06-23",
  },
  {
    id: 2,
    name: "Tasnim Akter",
    amount: 500,
    date: "2026-06-20",
  },
  {
    id: 3,
    name: "Karim Molla",
    amount: 1000,
    date: "2026-06-18",
  },
  {
    id: 4,
    name: "Sumaiya Begum",
    amount: 250,
    date: "2026-06-15",
  },
  {
    id: 5,
    name: "Arif Hossain",
    amount: 2000,
    date: "2026-06-12",
  },
];


const RecentContributors = () => {
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
<div className="overflow-hidden rounded-3xl bg-white shadow-sm">
  <table className="w-full">
    <thead className="border-b border-gray-100">
      <tr>
        <th className="px-6 py-4 text-left text-sm">
          Donor
        </th>

        <th className="px-6 py-4 text-left text-sm">
          Amount
        </th>

        <th className="px-6 py-4 text-left text-sm">
          Date
        </th>
      </tr>
    </thead>

    <tbody>
      {donations.map((donation) => (
        <tr
          key={donation.id}
          className="border-b border-gray-100"
        >
          <td className="px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 font-semibold text-[#C70000]">
                {donation.name[0]}
              </div>

              <span className="font-medium">
                {donation.name}
              </span>
            </div>
          </td>

          <td className="px-6 py-4 font-semibold text-[#C70000]">
            {donation.amount} Tk
          </td>

          <td className="px-6 py-4 text-gray-500">
            {donation.date}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default RecentContributors;