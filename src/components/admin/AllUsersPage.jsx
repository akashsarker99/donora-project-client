"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { LuUsers } from "react-icons/lu";
import UserActionMenu from "./UserActionMenu";
import { Avatar, Chip } from "@heroui/react";


const roleColor = {
  Donor: "primary",
  Volunteer: "warning",
  Admin: "secondary",
};

export default function AllUsersPage({ users }) {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    if (statusFilter === "all") return users;

    return users.filter(
      (user) =>
        user.status?.toLowerCase() ===
        statusFilter.toLowerCase()
    );
  }, [users, statusFilter]);

  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-logo text-4xl text-[#130505]">
            All Users
          </h1>

          <p className="mt-2 text-gray-500">
            Manage donors, volunteers and administrators.
          </p>
        </div>

      <div className="w-full md:w-56">
  <label className="mb-2 block text-sm font-medium text-gray-600">
    Filter by Status
  </label>

  <select
    value={statusFilter}
    onChange={(e) => setStatusFilter(e.target.value)}
    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100"
  >
    <option value="all">All Users</option>
    <option value="active">Active</option>
    <option value="blocked">Blocked</option>
  </select>
</div>

      </div>

      {filteredUsers.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white py-24">

          <LuUsers
            size={60}
            className="text-gray-300"
          />

          <h3 className="mt-5 text-2xl font-semibold">
            No Users Found
          </h3>

          <p className="mt-2 text-gray-500">
            No users match the selected filter.
          </p>

        </div>
      )}


      {filteredUsers.length > 0 && (
        <>
          <div className="hidden overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm lg:block">

            <table className="w-full">

              <thead className="bg-gray-50">

                <tr className="border-b">

                  <th className="px-6 py-4 text-left">
                    User
                  </th>

                  <th className="px-6 py-4 text-left">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left">
                    Role
                  </th>

                  <th className="px-6 py-4 text-left">
                    Status
                  </th>

                  <th className="px-6 py-4 text-center">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredUsers.map((user) => (

                  <tr
                    key={user._id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="px-6 py-2">

                      <div className="flex items-center gap-4">

                      <div className="flex h-13 w-13 items-center justify-center overflow-hidden rounded-full border-2 border-[#C70000] transition duration-300 group-hover:scale-105">
                                  <Image
                                    src={user.image}
                                    alt={user.name}
                                    width={44}
                                    height={44}
                                    className="h-full w-full object-cover"
                                  />
                                </div>

                        <div>

                          <p className="font-semibold">
                            {user.name}
                          </p>

                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5">
                      {user.email}
                    </td>

                    <td className="px-6 py-5">

                      <Chip
                        color={
                          roleColor[user.role] ||
                          "default"
                        }
                        variant="flat"
                      >
                        {user.role}
                      </Chip>

                    </td>

                    <td className="px-6 py-5">

                      <Chip
                        color={
                          user.status === "active"
                            ? "success"
                            : "danger"
                        }
                        variant="flat"
                      >
                        {user.status}
                      </Chip>

                    </td>

                    <td className="px-6 py-5 text-center">

                      <UserActionMenu
                        user={user}
                      />

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          <div className="grid gap-4 lg:hidden">

            {filteredUsers.map((user) => (

              <div
                key={user._id}
                className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm"
              >

                <div className="flex justify-between">

                  <div className="flex gap-4">

                    <Avatar
                      src={user.image}
                      name={user.name}
                    />

                    <div>

                      <h3 className="font-semibold">
                        {user.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {user.email}
                      </p>

                    </div>

                  </div>

                  <UserActionMenu
                    user={user}
                  />

                </div>

                <div className="mt-5 flex gap-3">

                  <Chip
                    color={
                      roleColor[user.role] ||
                      "default"
                    }
                    variant="flat"
                  >
                    {user.role}
                  </Chip>

                  <Chip
                    color={
                      user.status === "active"
                        ? "success"
                        : "danger"
                    }
                    variant="flat"
                  >
                    {user.status}
                  </Chip>

                </div>

              </div>

            ))}

          </div>
        </>
      )}
    </section>
  );
}