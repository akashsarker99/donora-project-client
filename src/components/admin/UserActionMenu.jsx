"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownPopover,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";

import {
  LuEllipsisVertical,
  LuShield,
  LuShieldCheck,
  LuUser,
  LuUserCheck,
  LuUserCog,
} from "react-icons/lu";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { updateUser } from "@/lib/actions/user";

export default function UserActionMenu({ user }) {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const currentUserEmail = session?.user?.email;
  const isCurrentUser = currentUserEmail === user.email;

  const handleUpdate = async (data, message) => {
    try {
      await updateUser(user.email, data);

      toast.success(message);

      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger
        aria-label="Open user actions"
        isDisabled={isCurrentUser}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <LuEllipsisVertical size={20} />
      </DropdownTrigger>

      <DropdownPopover>
        <DropdownMenu aria-label="User Actions">
          {isCurrentUser ? (
            <DropdownItem key="self" isReadOnly className="text-default-500">
              You can't modify your own account
            </DropdownItem>
          ) : (
            <>
              {user.status === "active" && user.role !== "admin" && (
                <DropdownItem
                  key="block"
                  startContent={<LuShield />}
                  color="danger"
                  onPress={() =>
                    handleUpdate(
                      { status: "blocked" },
                      "User blocked successfully.",
                    )
                  }
                >
                  Block User
                </DropdownItem>
              )}
            
              {user.role === "volunteer"  && (
                <DropdownItem
                  key="donor"
                  startContent={<LuUser />}
                  onPress={() =>
                    handleUpdate({ role: "donor" }, "User is now a Donor.")
                  }
                >
                  Make Donor
                </DropdownItem>
              )}
              {user.status === "blocked" && (
                <DropdownItem
                  key="unblock"
                  startContent={<LuShieldCheck />}
                  color="success"
                  onPress={() =>
                    handleUpdate(
                      { status: "active" },
                      "User unblocked successfully.",
                    )
                  }
                >
                  Unblock User
                </DropdownItem>
              )}

              {user.role === "donor" && (
                <DropdownItem
                  key="volunteer"
                  startContent={<LuUserCheck />}
                  onPress={() =>
                    handleUpdate(
                      { role: "volunteer" },
                      "User is now a Volunteer.",
                    )
                  }
                >
                  Make Volunteer
                </DropdownItem>
              )}
              {user.role !== "admin" && (
                <DropdownItem
                  key="admin"
                  startContent={<LuUserCog />}
                  color="secondary"
                  onPress={() =>
                    handleUpdate({ role: "admin" }, "User promoted to Admin.")
                  }
                >
                  Make Admin
                </DropdownItem>
              )}
            </>
          )}
        </DropdownMenu>
      </DropdownPopover>
    </Dropdown>
  );
}
