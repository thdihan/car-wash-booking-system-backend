import { z } from 'zod';
import { VehicleType } from './booking.constant';

const createBookingValidationSchema = z.object({
    body: z.object({
        customer: z.string(),
        serviceId: z.string(),
        slotId: z.string(),
        vehicleType: z.enum([...VehicleType] as [string, ...string[]]),
        vehicleBrand: z.string(),
        vehicleModel: z.string(),
        manufacturingYear: z.number(),
        registrationPlate: z.string(),
    }),
});

export const BookingValidations = {
    createBookingValidationSchema,
};
