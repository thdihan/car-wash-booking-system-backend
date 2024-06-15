import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middlewares/validateRequest';
import { UserValidations } from '../user/user.validation';

const router = express.Router();

router.post(
    '/signup',
    validateRequest(UserValidations.createUserValidationSchema),
    AuthController.signup,
);

export const AuthRoutes = router;
