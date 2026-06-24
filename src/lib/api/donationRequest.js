import { serverFetch } from "../core/server"

export const getDonationRequests = async () =>{
    return await serverFetch('/request?status=pending');
}

export const getDonationRequestById = async(id) =>{
    return await serverFetch(`/request/${id}`);
}
export const getMyDonationRequestsByEmail = async (email) => {
  return await serverFetch(`/request?email=${email}`);
};