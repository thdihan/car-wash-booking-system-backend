import express from 'express';
import { BookingController } from './booking.controller';
import validateRequest from '../../middlewares/validateRequest';
import { BookingValidations } from './booking.validation';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
    '/',
    auth(USER_ROLE.user),
    validateRequest(BookingValidations.createBookingValidationSchema),
    BookingController.createBooking,
);

router.get('/', auth(USER_ROLE.admin), BookingController.getAllBookings);

export const BookingRoutes = router;
