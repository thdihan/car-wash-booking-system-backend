/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
    name: string;
    email: string;
    password: string;
    phone: string;
    role: 'admin' | 'user';
    address: string;
}

export type TUserWithId = TUser & { _id: Types.ObjectId };

export interface UserModel extends Model<TUser> {
    //instance methods for checking if the user exist
    isUserExistsByEmail(email: string): Promise<Partial<TUserWithId>>;
    //instance methods for checking if passwords are matched
    isPasswordMatched(
        plainTextPassword?: string,
        hashedPassword?: string,
    ): Promise<boolean>;
    isJWTIssuedBeforePasswordChanged(
        passwordChangedTimestamp: Date,
        jwtIssuedTimestamp: number,
    ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
