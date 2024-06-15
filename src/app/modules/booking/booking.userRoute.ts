import express from 'express';
import { BookingController } from './booking.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth(USER_ROLE.user), BookingController.getMyBookings);

export const BookingUserRoutes = router;
