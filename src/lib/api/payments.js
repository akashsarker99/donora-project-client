import { serverFetch } from "../core/server"


export const getPayments = async () =>{
    return await serverFetch('/payment')
}