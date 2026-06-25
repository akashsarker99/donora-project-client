import { serverFetch} from "../core/server"

export const getUserByEmail = async (email) => {
    return await serverFetch(`/users?email=${email}`);
}

export const getAllUsers = async () => {
    return await serverFetch('/users');
}