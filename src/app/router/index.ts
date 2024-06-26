import { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ServiceRoutes } from '../modules/service/service.route';
import { SlotRouter } from '../modules/slot/slot.route';
import { BookingRoutes } from '../modules/booking/booking.route';
import { BookingUserRoutes } from '../modules/booking/booking.userRoute';

const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/services',
        route: ServiceRoutes,
    },
    {
        path: '/slots',
        route: SlotRouter,
    },
    {
        path: '/bookings',
        route: BookingRoutes,
    },
    {
        path: '/my-bookings',
        route: BookingUserRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
