'use client'

import { createDonationRequest } from "@/lib/actions/donationRequest";
import { Button, TextField, Input, TextArea, Label, FieldError, Form } from "@heroui/react";
import { useRouter } from "next/navigation";
import { LuCalendar, LuDroplets, LuEye, LuMapPin, LuPlus } from "react-icons/lu";
import { toast } from "react-toastify";

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
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const districtName =
      districts.find((district) => district.id === data.district)?.name ||
      data.district;

    const request = {
      ...data,
      district: districtName,
      requestMessage: data.message,
      requestStatus: "pending",
    };
    
    await createDonationRequest(request);
    toast.success("Request Created Successfully");
    router.push("/donation-requests");
  };

  return (
   <div className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-lg">
      <div className="h-1.5 bg-[#ff2b5b]" />

      <div className="p-8">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-base font-semibold text-[#C70000]">
            <LuDroplets size={16} />
            {request.bloodGroup}
          </div>

          <div className="rounded-full border border-yellow-300 bg-yellow-50 px-5 py-2 text-base font-medium text-yellow-700">
            Pending
          </div>
        </div>

        <h3 className="mb-4 text-2xl font-bold text-[#0F172A]">
          {request.recipientName}
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-500">
            <LuMapPin size={18} />
            <span className="text-lg">
              {request.district}, {request.upazila}
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-500">
            <LuCalendar size={18} />
            <span className="text-lg">
              {request.donationDate} at {request.donationTime}
            </span>
          </div>
        </div>

        <p className="mt-6 text-lg leading-9 text-gray-500">
          {request.message}
        </p>

        <button className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-full bg-red-50 text-xl font-semibold text-[#DC2626] transition hover:bg-red-100">
          <LuEye size={20} />
          View Details
        </button>
      </div>
    </div>
  );
};

export default CreateRequestForm;
