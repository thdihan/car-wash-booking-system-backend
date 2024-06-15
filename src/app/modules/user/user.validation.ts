import { z } from 'zod';

const createUserValidationSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z
            .string({
                invalid_type_error: 'Password must be a string',
            })
            .max(20, { message: "Password can't be more than 20 characters" }),
        role: z.enum(['admin', 'user']),
        address: z.string(),
    }),
});

export const UserValidations = {
    createUserValidationSchema,
};
