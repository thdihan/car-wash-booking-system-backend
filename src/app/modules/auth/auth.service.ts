import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const createUserIntoDB = async (payload: TUser) => {
    const newUser = await User.create(payload);
    return newUser;
};

export const AuthService = {
    createUserIntoDB,
};
