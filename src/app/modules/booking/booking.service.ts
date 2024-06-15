import { TBooking } from './booking.interface';
import { BookingModel } from './booking.model';

const createBookingIntoDB = async (payload: TBooking) => {
    let result = await BookingModel.create(payload);

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
