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

export const UserService = {
    getPersonalDataFromDB,
    updateProfileIntoDB,
};
