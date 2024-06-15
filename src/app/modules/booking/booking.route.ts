import express from 'express';
import { BookingController } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidations } from './booking.validation';

const router = express.Router();

router.post(
    '/',
    validateRequest(BookingValidations.createBookingValidationSchema),
    BookingController.createBooking,
);

router.get('/', BookingController.getAllBookings);

export const BookingRoutes = router;
