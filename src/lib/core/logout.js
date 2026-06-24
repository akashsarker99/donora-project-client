import { toast } from "react-toastify";
import { authClient } from "../auth-client";

export const handleLogout = async (router) =>{
    try {
    await authClient.signOut();

    toast.success("Logout successful");

    router.push("/login");
  } catch (error) {
    toast.error("Failed to logout");
  }
  }