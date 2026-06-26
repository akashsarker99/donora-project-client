'use client'
import { updateDonationRequest } from '@/lib/actions/donationRequest';
import { Button, Form, Input, Label, Modal, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import { LuHeart } from 'react-icons/lu';
import { toast } from 'react-toastify';

const DonateModal = ({request, user}) => {

    const router = useRouter()
      const handleDonate = async (e) => {
      e.preventDefault();
    
      try {
        const donationData = {
          donorName: user.name,
          donorEmail: user.email,
          donorId: user.id,
          requestStatus: "inprogress",
        };
    
        await updateDonationRequest(request._id,donationData);
        toast.success("Donation confirmed successfully");
        router.refresh();
         
      } catch (error) {
        toast.error(
          "Failed to confirm donation"
        );
      }
    };

    return (
        <div>
          <Modal>
  <Button className="bg-[#DC2626] h-12 px-8 rounded-full text-lg text-white hover:bg-[#B91C1C]">
   <LuHeart></LuHeart> Donate Now
  </Button>

  <Modal.Backdrop>
    <Modal.Container placement="center">
      <Modal.Dialog className="w-full max-w-3xl overflow-hidden rounded-[32px] bg-white shadow-2xl">
        <Modal.CloseTrigger />

        <Modal.Header className="border-b border-gray-100 px-6 py-6">
          <Modal.Heading className="font-logo text-2xl sm:text-4xl text-[#130505]">
            Confirm Your Donation
          </Modal.Heading>
        </Modal.Header>

        <Modal.Body className="p-4">
          <div className="mb-8 rounded-3xl border border-red-100 bg-red-50 p-6 sm:text-lg leading-9 text-[#B91C1C]">
            You are confirming to donate{" "}
            <span className="font-bold">
              {request.bloodGroup}
            </span>{" "}
            blood at{" "}
            <span className="font-bold">
              {request.hospital}
            </span>{" "}
            on{" "}
            <span className="font-bold">
              {request.donationDate}
            </span>{" "}
            at{" "}
            <span className="font-bold">
              {request.donationTime}
            </span>
            .
          </div>

          <Form
            onSubmit={handleDonate}
            className="space-y-6"
          >
            <TextField className="w-full">
              <Label className="mb-2 text-lg font-semibold">
                Donor Name
              </Label>

              <Input
                value={user?.name || ""}
                readOnly
                className="h-14 rounded-2xl"
              />
            </TextField>

            <TextField className="w-full">
              <Label className="mb-2 text-lg font-semibold">
                Donor Email
              </Label>

              <Input
                value={user?.email || ""}
                readOnly
                className="h-14 rounded-2xl"
              />
            </TextField>

            <div className="flex justify-end gap-4 pt-4">
              <Button
                slot="close"
                variant="light"
                className="text-gray-600 hover:bg-gray-100 py-6"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                slot='close'
                 className="py-6 rounded-full bg-[#DC2626] text-white hover:bg-[#B91C1C]"
              >
                Confirm Donation
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal.Container>
  </Modal.Backdrop>
</Modal>
        </div>
    );
};

export default DonateModal;