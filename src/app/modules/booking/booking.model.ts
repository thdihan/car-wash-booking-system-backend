import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';
import { VehicleType } from './booking.constant';

const bookingSchema = new Schema<TBooking>(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        serviceId: {
            type: Schema.Types.ObjectId,
            ref: 'Service',
            required: true,
        },
        slotId: {
            type: Schema.Types.ObjectId,
            ref: 'Slot',
            required: true,
        },
        vehicleType: {
            type: String,
            enum: VehicleType,
            required: true,
        },
        vehicleBrand: {
            type: String,
            required: true,
        },
        vehicleModel: {
            type: String,
            required: true,
        },
        manufacturingYear: {
            type: Number,
            required: true,
        },
        registrationPlate: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export const BookingModel = model<TBooking>('Booking', bookingSchema);
