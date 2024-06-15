import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidations } from './service.validation';
import { slotValidations } from '../slot/slot.validation';
import { SlotController } from '../slot/slot.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
    '/',
    auth(USER_ROLE.admin),
    validateRequest(ServiceValidations.createServiceValidationSchema),
    ServiceController.createService,
);

router.get('/:id', ServiceController.getServiceById);
router.get('/', ServiceController.getAllServices);
router.patch(
    '/:id',
    auth(USER_ROLE.admin),
    validateRequest(ServiceValidations.updateServiceValidationSchema),
    ServiceController.updateService,
);
router.delete('/:id', auth(USER_ROLE.admin), ServiceController.deleteService);

router.post(
    '/slots',
    auth(USER_ROLE.admin),
    validateRequest(slotValidations.createSlotValidationSchema),
    SlotController.createSlots,
);

export const ServiceRoutes = router;
