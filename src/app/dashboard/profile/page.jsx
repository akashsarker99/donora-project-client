'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { LuPencil, LuSave } from 'react-icons/lu';
import { authClient } from '@/lib/auth-client';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const { data: session } = authClient.useSession();
  const user = session?.user;
console.log("user: ", user);
  const avatarInitial = user?.name?.charAt(0).toUpperCase() || '';

  return (
    <div className="mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="bg-linear-to-r from-[#DC2626] to-[#B91C1C] px-8 py-10 text-white">
          <div className="flex flex-col items-center gap-5 md:flex-row">
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white">
              {user?.image ? (
                <Image
                  src={user.image}
                  alt={user?.name || 'Profile photo'}
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
              <h1 className="font-logo text-4xl">
                {user?.name}
              </h1>

              <p className="mt-2 text-red-100">
                {user?.email}
              </p>

              <span className="mt-3 inline-flex rounded-full bg-white/20 px-4 py-1 text-sm capitalize">
                {user?.role}
              </span>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="mb-8 flex justify-end">
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
                className="bg-[#DC2626] text-white"
              >
                <LuSave />
                Save Changes
              </Button>
            )}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Full Name
              </label>

              <input
                defaultValue={user?.name}
                disabled={!isEditing}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Email Address
              </label>

              <input
                defaultValue={user?.email}
                disabled
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Blood Group
              </label>

              <select
                defaultValue={user?.bloodGroup}
                disabled={!isEditing}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 disabled:bg-gray-50"
              >
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                District
              </label>

              <input
                defaultValue={user?.district}
                disabled={!isEditing}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Upazila
              </label>

              <input
                defaultValue={user?.upazila}
                disabled={!isEditing}
                className="w-full rounded-2xl border border-gray-200 px-4 py-3 disabled:bg-gray-50"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-500">
                Account Status
              </label>

              <input
                value={user?.status || 'active'}
                disabled
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 capitalize"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
