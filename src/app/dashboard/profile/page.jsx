"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@heroui/react";
import { LuDot, LuDroplets, LuPencil, LuSave } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { updateUser } from "@/lib/actions/user";
import { getUserByEmail } from "@/lib/api/user";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const { data: session } = authClient.useSession();
  const userDetails = session?.user;

  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    bloodGroup: "",
    district: "",
    upazila: "",
  });
  console.log("user: ", user);

    useEffect(() => {
    const getUser = async () => {
      if (!userDetails?.email) return;

      const data = await getUserByEmail(userDetails.email);
      setUser(data);
      setFormData({
        name: data?.name || "",
        bloodGroup: data?.bloodGroup || "",
        district: data?.district || "",
        upazila: data?.upazila || "",
      });
    };
    getUser();
  }, [userDetails?.email]);

  const handleSave = async () => {
    try {
      await updateUser(userDetails.email, formData);

      setUser({
        ...user,
        ...formData,
      });

      setIsEditing(false);

      toast.success("Profile Updated Successfully");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  const avatarInitial = user?.name?.charAt(0).toUpperCase() || "";

  return (
    <div className="mx-7">
      <div className="mx-auto max-w-5xl m-7 ">
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="bg-linear-to-r from-[#DC2626] to-[#B91C1C] px-8 py-10 text-white">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-5 md:flex-row ">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white">
                {user?.image ? (
                  <Image
                    src={user.image}
                    alt={user?.name || "Profile photo"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-red-700 text-4xl font-bold">
                    {avatarInitial}
                  </div>
                )}
              </div>

              <div>
                <h1 className="font-logo text-2xl sm:text-4xl">{user?.name}</h1>

                <p className="mt-2 text-red-100">{user?.email}</p>

                <div className="mt-3 flex flex-wrap gap-3">
                  <span className="rounded-full flex items-center bg-yellow-500 px-4 py-1 text-sm font-medium capitalize backdrop-blur-sm">
                    {user?.role}
                  </span>

                  <span
                    className={`flex items-center text-sm font-medium capitalize backdrop-blur-sm ${
                      user?.status === "active"
                        ? " text-green-300"
                        : "bg-red-500 shadow-2xl rounded-2xl px-3 text-white"
                    }`}
                  >
                   <LuDot className="text-2xl"></LuDot> {user?.status} {user?.role}
                  </span>
                </div>
              </div>
            </div>
            <div className="mr-11">
            <div className="hidden sm:block rounded-3xl bg-white p-5 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                  <LuDroplets className="text-3xl text-[#DC2626] " />
                </div>
            
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                    Blood Group
                  </p>
            
                  <h2 className="font-logo text-4xl text-[#DC2626]">
                    {user?.bloodGroup}
                  </h2>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col sm:flex-row gap-8 sm:justify-between sm:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#130505]">
                Personal Information
              </h2>

              <p className="mt-1 text-gray-500">
                Manage your profile details and donation information.
              </p>
            </div>
            <div className="mb-8 flex justify-start">
              {!isEditing ? (
                <Button
                  onPress={() => setIsEditing(true)}
                  className="bg-[#DC2626] text-white"
                >
                  <LuPencil />
                  Edit Profile
                </Button>
              ) : (
                <Button
                  onPress={handleSave}
                  className="bg-[#DC2626] text-white"
                >
                  <LuSave />
                  Save Changes
                </Button>
              )}
            </div>
          </div>

          <form className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Full Name
              </label>

              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                disabled={!isEditing}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-slate-700 outline-none disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Email Address
              </label>

              <input
                type="email"
                value={user?.email || ""}
                disabled
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-slate-700"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Blood Group
              </label>

              <select
                value={formData.bloodGroup}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bloodGroup: e.target.value,
                  })
                }
                disabled={!isEditing}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-slate-700 outline-none disabled:bg-gray-50"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                District
              </label>

              <input
                type="text"
                value={formData.district}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    district: e.target.value,
                  })
                }
                disabled={!isEditing}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-slate-700 outline-none disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Upazila
              </label>

              <input
                type="text"
                value={formData.upazila}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    upazila: e.target.value,
                  })
                }
                disabled={!isEditing}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-slate-700 outline-none disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Account Status
              </label>

              <input
                type="text"
                value={user?.status || "active"}
                disabled
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-slate-700 capitalize"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
