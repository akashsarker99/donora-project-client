import { getUserSession } from '@/lib/core/session';
import React from 'react';
import AdminStatsCard from './AdminStatsCard';
import { getAllUsers } from '@/lib/api/user';
import { getAllDonationRequests } from '@/lib/api/donationRequest';
import { LuActivity, LuBadgeDollarSign, LuHeartHandshake, LuUsers } from 'react-icons/lu';
import { getPayments } from '@/lib/api/payments';

const AdminDashboard = async () => {
    const user = await getUserSession();
    const users = await getAllUsers();
    const requests = await getAllDonationRequests();
    const payments = await getPayments();
    console.log("users: ", users);
    const stats = [
  {
    title: "Total Users",
    value: users.length,
    icon: LuUsers,
    color: "blue",
  },
  {
    title: "Total Funding",
    value: `${payments.reduce(
      (total, payment) => total + Number(payment.amount),
      0
    )} Tk`,
    icon: LuBadgeDollarSign,
    color: "green",
  },
  {
    title: "Blood Requests",
    value: requests.length,
    icon: LuActivity,
    color: "red",
  },
];
    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="rounded-3xl bg-linear-to-r from-[#ac0000] to-[#c70000] p-6 md:p-8 text-white">
        <p className="text-lg text-white/90">
          Welcome back,
        </p>

        <h2 className="font-logo mt-2 text-3xl md:text-4xl font-bold">
          {user?.name}!
        </h2>

        <p className="mt-3 text-base">
          Donor Account · Status:
          <span className="ml-1 font-medium text-green-300">
            Active
          </span>
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
  {stats.map((item) => (
    <AdminStatsCard
      key={item.title}
      {...item}
    />
  ))}
</div>
      </div>
    );
};

export default AdminDashboard;