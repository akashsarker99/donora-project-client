import { serverFetch, serverMutation } from "../core/server"

export const getUserByEmail = async (email) => {
    return await serverFetch(`/users?email=${email}`);
}

