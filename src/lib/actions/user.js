import {serverMutation } from "../core/server"

export const createUser = async (user) => {
  return await serverMutation('/users', user);
};

export const updateUser = async(email, user) => {
    return await serverMutation(`/users/${email}`, user, 'PATCH');
}