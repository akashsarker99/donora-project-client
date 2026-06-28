import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import { LuTrash2 } from "react-icons/lu";

const DeleteModal = ({ handleDelete, request }) => {
  const { recipientName } = request;
  return (
    <div>
      <AlertDialog>
        <Button
          variant="ghost"
          className="rounded-lg p-2 text-red-600 hover:bg-red-50"
        >
          <LuTrash2 size={18} />
        </Button>

        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[420px]">
              <AlertDialog.CloseTrigger />

              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />

                <AlertDialog.Heading>
                  Delete Donation Request?
                </AlertDialog.Heading>
              </AlertDialog.Header>

              <AlertDialog.Body>
                <p>
                  Are you sure you want to delete the donation request for{" "}
                  <strong>{recipientName}</strong>?
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  This action is permanent and cannot be undone.
                </p>
              </AlertDialog.Body>

              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>

                <Button onClick={()=>handleDelete(request._id)} slot="close" variant="danger">
                  Delete Request
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteModal;
