/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { TUser } from './user.interface';
import { User } from './user.model';

const getPersonalDataFromDB = async (userId: string) => {
    const user = await User.findById(userId);
    return user;
};

const updateProfileIntoDB = async ({
    id,
    payload,
}: {
    id: string;
    payload: Partial<TUser>;
}) => {
    const result = await User.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const getAllUsersFromDB = async () => {
    const users = await User.find();

    const usersWithoutPassword = users.map((user) => {
        const { password, ...rest } = user.toObject();
        return rest;
    });
    return usersWithoutPassword;
};

export const UserService = {
    getPersonalDataFromDB,
    updateProfileIntoDB,
    getAllUsersFromDB,
};
