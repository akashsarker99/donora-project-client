"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import {
  LuArrowLeft,
  LuDroplets,
} from "react-icons/lu";

import { toast } from "react-toastify";
import { updateDonationRequest } from "@/lib/actions/donationRequest";


const EditRequestForm = ({ request }) => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    recipientName: request.recipientName,
    hospital: request.hospital,
    district: request.district,
    upazila: request.upazila,
    address: request.address,
    donationDate: request.donationDate,
    donationTime: request.donationTime,
    message: request.message,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateDonationRequest(request._id, formData);
      toast.success("Request updated successfully.");

      router.push("/dashboard/requests");
      router.refresh();
    } catch {
      toast.error("Failed to update request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" shadow-sm rounded-3xl overflow-hidden">

      <div className="bg-linear-to-r from-[#DC2626] to-[#B91C1C] px-8 py-10 text-white">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <button
             onClick={() => router.back()}
              href="/dashboard/requests"
              className="mb-4 inline-flex items-center gap-2 text-red-100 hover:text-white"
            >
              <LuArrowLeft className="transition hover:-translate-x-1" />
             <span className="text-sm">Back to Requests</span>
            </button>

            <h1 className="font-logo text-4xl">
              Edit Donation Request
            </h1>

            <p className="mt-2 text-red-100">
              Update the information below.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-5 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50">
                <LuDroplets className="text-3xl text-[#DC2626]" />

              </div>

              <div>

                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Blood Group
                </p>

                <h2 className="font-logo text-5xl text-[#DC2626]">
                  {request.bloodGroup}
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="p-8">
<Form onSubmit={handleSubmit} className="space-y-6 p-6">
  <TextField isRequired name="recipientName">
    <Label>Recipient Name</Label>

    <Input
      value={formData.recipientName}
      onChange={handleChange}
      className="w-full rounded-2xl"
      placeholder="Patient's full name"
    />

    <FieldError />
  </TextField>

 <div className="grid gap-5 md:grid-cols-2">
  <TextField isRequired name="district">
    <Label>Recipient District</Label>

    <Input
      value={formData.district}
      onChange={handleChange}
      placeholder="Enter district"
      className="w-full rounded-2xl"
    />

    <FieldError />
  </TextField>

  <TextField isRequired name="upazila">
    <Label>Recipient Upazila</Label>

    <Input
      value={formData.upazila}
      onChange={handleChange}
      placeholder="Enter upazila"
      className="w-full rounded-2xl"
    />

    <FieldError />
  </TextField>
</div>

  <TextField isRequired name="hospital">
    <Label>Hospital Name</Label>

    <Input
      value={formData.hospital}
      onChange={handleChange}
      className="w-full rounded-2xl"
    />

    <FieldError />
  </TextField>

  <TextField isRequired name="address">
    <Label>Full Address</Label>

    <Input
      value={formData.address}
      onChange={handleChange}
      className="w-full rounded-2xl"
    />

    <FieldError />
  </TextField>


  <TextField>
    <Label>Blood Group</Label>

    <Input
      value={request.bloodGroup}
      isDisabled
      className="w-full rounded-2xl"
    />
  </TextField>

  <div className="grid gap-5 md:grid-cols-2">
    <TextField
      isRequired
      name="donationDate"
      type="date"
    >
      <Label>Donation Date</Label>

      <Input
        value={formData.donationDate}
        onChange={handleChange}
        className="w-full rounded-2xl"
      />

      <FieldError />
    </TextField>

    <TextField
      isRequired
      name="donationTime"
      type="time"
    >
      <Label>Donation Time</Label>

      <Input
        value={formData.donationTime}
        onChange={handleChange}
        className="w-full rounded-2xl"
      />

      <FieldError />
    </TextField>
  </div>

  <TextField isRequired name="message">
    <Label>Request Message</Label>

    <TextArea
      value={formData.message}
      onChange={handleChange}
      rows={5}
    />

    <FieldError />
  </TextField>

  <div className="flex justify-end gap-4">

    <Button
      variant="bordered"
      onPress={() => router.back()}
    >
      Cancel
    </Button>

    <Button
      type="submit"
      className="bg-[#DC2626] text-white"
    >
      Update Request
    </Button>

  </div>
</Form>

      </div>

    </div>
  );
};

export default EditRequestForm;