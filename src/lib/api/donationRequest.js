import { serverFetch } from "../core/server"

export const getDonationRequests = async () =>{
    return await serverFetch('/request');
}