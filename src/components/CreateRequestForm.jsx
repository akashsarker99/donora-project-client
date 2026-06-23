'use client'

import { Button } from "@heroui/react";
import { LuPlus } from "react-icons/lu";

const bloodGroups = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];

const CreateRequestForm = ({
  user,
  districts = [],
  upazilas = [],
  selectedDistrict = "",
  handleDistrictChange,
}) => {
  return (
    <div className="rounded-3xl bg-white shadow-sm lg:w-200 ">
      <div className="border-b border-gray-100 px-6 py-5">
        <h2 className="font-logo text-3xl font-bold text-[#130505]">
          Create Donation Request
        </h2>
      </div>

      <form className="space-y-6 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Requester Name
            </label>

            <input
              type="text"
              value={user?.name || ""}
              readOnly
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Requester Email
            </label>

            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Recipient Name
          </label>

          <input
            type="text"
            name="recipientName"
            required
            placeholder="Patient's full name"
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-[#DC2626]"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Recipient District
            </label>

            <select
              value={selectedDistrict}
              onChange={handleDistrictChange}
              name="district"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none"
            >
              <option value="">Select...</option>

              {districts.map((district) => (
                <option
                  key={district.id}
                  value={district.id}
                >
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Recipient Upazila
            </label>

            <select
              name="upazila"
              required
              disabled={!selectedDistrict}
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none"
            >
              <option value="">Select...</option>

              {upazilas.map((upazila) => (
                <option
                  key={upazila.id}
                  value={upazila.name}
                >
                  {upazila.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Hospital Name
          </label>

          <input
            type="text"
            name="hospital"
            required
            placeholder="e.g. Dhaka Medical College Hospital"
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-[#DC2626]"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Full Address
          </label>

          <input
            type="text"
            name="address"
            required
            placeholder="e.g. Zahir Raihan Rd, Dhaka 1000"
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-[#DC2626]"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Blood Group Required
          </label>

          <select
            name="bloodGroup"
            required
            className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none"
          >
            <option value="">Select...</option>

            {bloodGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Donation Date
            </label>

            <input
              type="date"
              name="donationDate"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Donation Time
            </label>

            <input
              type="time"
              name="donationTime"
              required
              className="w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Request Message
          </label>

          <textarea
            rows={5}
            name="message"
            required
            placeholder="Explain why blood is needed and any additional details..."
            className="w-full resize-none rounded-2xl border border-gray-200 px-4 py-3 outline-none focus:border-[#DC2626]"
          />
        </div>

        <Button
          type="submit"
          className="h-12 w-full bg-[#DC2626] text-base font-semibold text-white hover:bg-[#B91C1C]"
        >
          <LuPlus size={18} />
          Submit Request
        </Button>
      </form>
    </div>
  );
};

export default CreateRequestForm;
