import { TUser } from '../user/user.interface';
import { User } from '../user/user.model';

const createUserIntoDB = async (user: TUser) => {
    const newUser = await User.create(user);
    return newUser;
};

export const AuthService = {
    createUserIntoDB,
};
