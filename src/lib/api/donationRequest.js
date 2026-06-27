import { serverFetch } from "../core/server"

export const getDonationRequestById = async(id) =>{
    return await serverFetch(`/request/${id}`);
}
export const getMyDonationRequestsByEmail = async (email) => {
  return await serverFetch(`/request?email=${email}`);
};

export const getAllDonationRequests = async () => {
  return await serverFetch('/request');
}

export const donationRequestsPage = async (page)=>{
    return await serverFetch(`/donationpage?page=${page}`);
}

export const getAllDonationRequestsByPage = async(page) =>{
    return await serverFetch(`/alldonationpage?page=${page}`);
}
