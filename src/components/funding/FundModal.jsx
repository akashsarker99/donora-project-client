import { getUserSession } from "@/lib/core/session";
import { Button, FieldError, Input, Label, Modal, TextField } from "@heroui/react";
import { TbCoinTaka } from "react-icons/tb";


const FundModal = async () => {
    const user = await getUserSession()
    return (
<Modal>
  <Button className="flex items-center gap-2 rounded-xl bg-[#C70000] px-5 py-6 font-semibold text-white transition hover:bg-[#A60000]">
    <TbCoinTaka  />
    Give Fund
  </Button>

  <Modal.Backdrop>
    <Modal.Container placement="center">
      <Modal.Dialog className="w-full max-w-2xl rounded-[32px] overflow-hidden bg-white">
        <Modal.CloseTrigger />

        <Modal.Header className="border-b border-gray-100 px-8 py-6">
          <Modal.Heading className="font-logo text-4xl text-[#130505]">
            Give Fund
          </Modal.Heading>
        </Modal.Header>

        <Modal.Body className="px-8 py-8">
          <form action={'/api/payment'} method="POST" className="space-y-6">
            <TextField
              name="name"
              defaultValue={user?.name}
            >
              <Label>Donor Name</Label>

              <Input
                readOnly
                className="w-full rounded-2xl"
              />

              <FieldError />
            </TextField>

            <TextField
              name="email"
              defaultValue={user?.email}
            >
              <Label>Donor Email</Label>

              <Input
                readOnly
                className="w-full rounded-2xl"
              />

              <FieldError />
            </TextField>

            <TextField
              name="amount"
              isRequired
            >
              <Label>Amount (BDT)</Label>

              <Input
                 name="funding"
                type="number"
                placeholder="500"
                className="w-full rounded-2xl"
              />

              <FieldError />
            </TextField>

            <div className="flex items-center justify-end gap-4 pt-4">
              <Button
                variant="light"
                slot="close"
                className="px-8 text-gray-600 hover:bg-gray-100 py-6"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="py-6 rounded-full bg-[#DC2626] text-white hover:bg-[#B91C1C]"
              >
                Confirm Payment
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal.Dialog>
    </Modal.Container>
  </Modal.Backdrop>
</Modal>
    );
};

export default FundModal;