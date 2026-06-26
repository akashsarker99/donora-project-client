
'use server'

import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const serverFetch = async( path) =>{
    const token = await getUserToken();
    const res = await fetch(`${baseUrl}${path}`,{
        headers: token? {
            authorization: `Bearer ${token}`
        }: {},
    });
    return res.json();
}


export const serverMutation = async (path, data, method='POST') =>{
     const token = await getUserToken();
    const res = await fetch(`${baseUrl}${path}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
           ...(token && {
           authorization: `Bearer ${token}`,
      }),
        } ,
        body: JSON.stringify(data),
    });
    return res.json();
}