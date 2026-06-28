import { serverFetch} from "../core/server"

export const getUserByEmail = async (email) => {
    return await serverFetch(`/users?email=${email}`);
}

export const getAllUsers = async () => {
    return await serverFetch('/users');
}


export const searchDonors = async ({bloodGroup, district, upazila}) => {
  const params = new URLSearchParams();
  if (bloodGroup) params.append("bloodGroup", bloodGroup);
  if (district) params.append("district", district);
  if (upazila) params.append("upazila", upazila);

    return await serverFetch(`/users/search?${params.toString()}`)
};

export const getAllUsersByPage = async (page) => {
    return await serverFetch(`/alluserpage?page=${page}`);
}