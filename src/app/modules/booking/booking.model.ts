import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';
import { VehicleType } from './booking.constant';
import { Service } from '../service/service.model';
import AppError from '../../utils/appError';
import httpStatus from 'http-status';
import { Slot } from '../slot/slot.model';

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

bookingSchema.pre('save', async function (next) {
    // Check if service is available
    const service = await Service.findById(this.serviceId);
    const isDeleted = service?.isDeleted;
    if (isDeleted) {
        throw new AppError(httpStatus.NOT_FOUND, 'Service not found');
    }

    // Check if slot is available
    const slot = await Slot.findById(this.slotId);
    const isBooked = slot?.isBooked;
    if (isBooked !== 'available') {
        throw new AppError(httpStatus.BAD_REQUEST, 'Slot is not available');
    }

    next();
});

export const BookingModel = model<TBooking>('Booking', bookingSchema);
