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

router.get('/all', auth(USER_ROLE.admin), UserController.getAllUsers);

router.put(
    '/',
    auth(USER_ROLE.admin, USER_ROLE.user),
    UserController.updateProfile,
);

export const UserRoutes = router;
