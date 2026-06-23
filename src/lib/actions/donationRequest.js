import { serverMutation } from "../core/server"

export const createDonationRequest = async (request) => {
    return await serverMutation('/request', request);
}