import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidations } from './service.validation';

const router = express.Router();

router.post(
    '/',
    validateRequest(ServiceValidations.createServiceValidationSchema),
    ServiceController.createService,
);

export const ServiceRoutes = router;
