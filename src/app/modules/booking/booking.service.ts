import { Slot } from '../slot/slot.model';
import { TBooking } from './booking.interface';
import { BookingModel } from './booking.model';

const createBookingIntoDB = async (payload: TBooking) => {
    let result;
    const session = await BookingModel.startSession();
    try {
        session.startTransaction();
        result = await BookingModel.create(payload);

        const slotId = result?.slotId;
        await Slot.findOneAndUpdate(
            { _id: slotId },
            { isBooked: 'booked' },
            { new: true },
        );
        await session.commitTransaction();
        session.endSession();
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }

    result = await result.populate('customer', '_id name email phone address');
    result = await result.populate(
        'serviceId',
        '_id name description price duration isDeleted',
    );
    result = await result.populate(
        'slotId',
        '_id service date startTime endTime isBooked',
    );
    return result;
};

const getAllBookingFromDB = async () => {
    const result = await BookingModel.find()
        .populate('customer', '_id name email phone address')
        .populate('serviceId', '_id name description price duration isDeleted')
        .populate('slotId', '_id service date startTime endTime isBooked');
    return result;
};
export const BookingService = {
    createBookingIntoDB,
    getAllBookingFromDB,
};
