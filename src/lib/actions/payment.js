'use server'
const { serverMutation } = require("../core/server")

export const createPayment = async (paymentInfo) => {
    return await serverMutation('/payment', paymentInfo);
}