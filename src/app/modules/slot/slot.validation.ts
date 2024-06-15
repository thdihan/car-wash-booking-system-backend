import { z } from 'zod';

const createSlotValidationSchema = z.object({
    body: z.object({
        startTime: z.string(),
        endTime: z.string(),
        service: z.string(),
        date: z.string(),
        isBooked: z.boolean().optional(),
    }),
});

export const slotValidations = {
    createSlotValidationSchema,
};
