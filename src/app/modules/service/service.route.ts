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

router.get('/:id', ServiceController.getServiceById);
router.get('/', ServiceController.getAllServices);
router.patch(
    '/:id',
    validateRequest(ServiceValidations.updateServiceValidationSchema),
    ServiceController.updateService,
);
router.delete('/:id', ServiceController.deleteService);

export const ServiceRoutes = router;
