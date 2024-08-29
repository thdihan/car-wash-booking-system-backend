import { User } from './user.model';

const getPersonalDataFromDB = async (userId: string) => {
    const user = await User.findById(userId);
    return user;
};

export const UserService = {
    getPersonalDataFromDB,
};
