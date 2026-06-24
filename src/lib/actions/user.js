import {serverMutation } from "../core/server"

export const createUser = async (user) => {
    return await serverMutation('/users', user);
}