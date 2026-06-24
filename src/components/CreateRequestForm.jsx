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
   <div className="rounded-3xl bg-white shadow-sm lg:w-[800px]">
      <div className="border-b border-gray-100 px-6 py-5">
        <h2 className="font-logo text-3xl font-bold text-[#130505]">
          Create Donation Request
        </h2>
      </div>

      <Form onSubmit={handleSubmit} className="space-y-6 p-6">
        <div className="grid gap-5 md:grid-cols-2">
          <TextField name="requesterName">
            <Label>Requester Name</Label>

            <Input
              value={user?.name || ""}
              className="w-full rounded-2xl"
            />

            <FieldError />
          </TextField>

          <TextField name="requesterEmail">
            <Label>Requester Email</Label>

            <Input
              value={user?.email || ""}
              className="w-full rounded-2xl"
            />

            <FieldError />
          </TextField>
        </div>

        <TextField isRequired name="recipientName">
          <Label>Recipient Name</Label>

          <Input
            className="w-full rounded-2xl"
            placeholder="Patient's full name"
          />

          <FieldError />
        </TextField>

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
              className="w-full rounded-2xl border border-default-200 bg-transparent px-4 py-3 outline-none"
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
              className="w-full rounded-2xl border border-default-200 bg-transparent px-4 py-3 outline-none"
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

        <TextField isRequired name="hospital">
          <Label>Hospital Name</Label>

          <Input
            className="w-full rounded-2xl"
            placeholder="e.g. Dhaka Medical College Hospital"
          />

          <FieldError />
        </TextField>

        <TextField isRequired name="address">
          <Label>Full Address</Label>

          <Input
            className="w-full rounded-2xl"
            placeholder="e.g. Zahir Raihan Rd, Dhaka 1000"
          />

          <FieldError />
        </TextField>

        <div>
          <label className="mb-2 block font-medium">
            Blood Group Required
          </label>

          <select
            name="bloodGroup"
            required
            className="w-full rounded-2xl border border-default-200 bg-transparent px-4 py-3 outline-none"
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
          <TextField
            isRequired
            name="donationDate"
            type="date"
          >
            <Label>Donation Date</Label>

            <Input className="w-full rounded-2xl" />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="donationTime"
            type="time"
          >
            <Label>Donation Time</Label>

            <Input className="w-full rounded-2xl" />

            <FieldError />
          </TextField>
        </div>

        <TextField isRequired name="message">
          <Label>Request Message</Label>

          <TextArea
            rows={5}
            placeholder="Explain why blood is needed and any additional details..."
          />

          <FieldError />
        </TextField>

        <Button
          type="submit"
          className="h-12 w-full bg-[#DC2626] text-base font-semibold text-white hover:bg-[#B91C1C]"
        >
          <LuPlus size={18} />
          Submit Request
        </Button>
      </Form>
    </div>
  );
};

export default CreateRequestForm;
