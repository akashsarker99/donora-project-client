'use server'

import { serverMutation } from "../core/server";

export const createPayment = async (paymentInfo) => {
    return await serverMutation('/payment', paymentInfo);
}