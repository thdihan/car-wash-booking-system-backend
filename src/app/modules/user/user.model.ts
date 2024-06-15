import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

const userSchema = new Schema<TUser>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
            enum: ['admin', 'user'],
            default: 'user',
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

userSchema.pre('save', async function (next) {
    // const user = this; // doc
    // hashing password and save into DB
    this.password = await bcrypt.hash(
        this.password,
        Number(config.bcrypt_salt_rounds),
    );
    next();
});

// post save middleware / hook
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});

export const User = model<TUser>('User', userSchema);
