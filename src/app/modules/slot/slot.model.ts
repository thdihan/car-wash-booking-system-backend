import { Schema, model } from 'mongoose';
import { TSlot } from './slot.interface';

const slotSchema = new Schema<TSlot>(
    {
        service: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Service',
        },
        date: {
            type: String,
            required: true,
        },
        startTime: {
            type: String,
            required: true,
        },
        endTime: {
            type: String,
            required: true,
        },
        isBooked: {
            enum: ['available', 'booked', 'cancelled'],
            type: String,
            required: true,
            default: 'available',
        },
    },
    {
        timestamps: true,
    },
);

export const Slot = model<TSlot>('Slot', slotSchema);
