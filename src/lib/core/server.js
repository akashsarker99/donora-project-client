
'use server'

import { getTokenServer } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const serverFetch = async( path) =>{
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}${path}`,{cache: "no-store",
        headers: {
            'Content-Type': 'application/json',
           ...(token && {
        Authorization: `Bearer ${token}`,
      }),
        }
    });
    return res.json();
}


export const serverMutation = async (path, data, method='POST') =>{
    const token = await getTokenServer();
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        cache: "no-store",
        headers: {
            'Content-Type': 'application/json',
           ...(token && {
        Authorization: `Bearer ${token}`,
      }),
        } ,
        body: JSON.stringify(data),
    });
    return res.json();
}