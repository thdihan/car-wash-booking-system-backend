import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidations } from './service.validation';
import { slotValidations } from '../slot/slot.validation';
import { SlotController } from '../slot/slot.controller';

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

router.post(
    '/slots',
    validateRequest(slotValidations.createSlotValidationSchema),
    SlotController.createSlots,
);

export const ServiceRoutes = router;
