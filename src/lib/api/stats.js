import { serverFetch } from "../core/server"

export const getStats = async () => {
    return serverFetch('/stats')
}