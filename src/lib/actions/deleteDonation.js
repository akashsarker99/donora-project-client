'use server'
import { getTokenServer } from "../core/session";

export const deleteDonationRequest = async (id) => {
    const token = await getTokenServer();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/request/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
             ...(token && {
        Authorization: `Bearer ${token}`,
      }),
        },
        

    });
    const data = await res.json()
    return data;

}