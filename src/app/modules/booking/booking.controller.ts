import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { BookingService } from './booking.service';
import sendResponse from '../../utils/sendResponse';

const createBooking = catchAsync(async (req, res) => {
    req.body.customer = req.user.id;
    const result = await BookingService.createBookingIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Booking successfully',
        data: result,
    });
});

const getAllBookings = catchAsync(async (req, res) => {
    const result = await BookingService.getAllBookingFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'All bookings retrieved successfully',
        data: result,
    });
});

const getMyBookings = catchAsync(async (req, res) => {
    const result = await BookingService.getMyBookingsFromDB(req.user.id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My bookings retrieved successfully',
        data: result,
    });
});

export const BookingController = {
    createBooking,
    getAllBookings,
    getMyBookings,
};
