import { headers } from "next/headers";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export const getUserSession = async() =>{
    const session = await auth.api.getSession({
        headers: await headers(),
    })
    getTokenServer()
    return session?.user || null;
}

export const getTokenServer = async () => {
   try {
    const { token } = await auth.api.getToken({
      headers: await headers(),
    });

    return token ?? null;
  } catch (error) {
    return null;
  }
};
export const requireRole = async (role) => {
    const user = await getUserSession();
    if(!user){
        redirect('/login')
    }
    if (user?.role !== role) {
        redirect('/unauthorized')
    }
    return user ;
}