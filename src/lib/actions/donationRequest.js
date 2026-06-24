
'use server'
import { serverMutation } from "../core/server"

export const createDonationRequest = async (request) => {
    return await serverMutation('/request', request);
}

export const updateDonationRequest = async (id, request) => {
    return await serverMutation(`/request/${id}`, request, 'PATCH');
}
