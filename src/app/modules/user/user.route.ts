import express from 'express';

import { UserController } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = express.Router();

router.get(
    '/',
    auth(USER_ROLE.admin, USER_ROLE.user),
    UserController.getPersonalData,
);

export const UserRoutes = router;
