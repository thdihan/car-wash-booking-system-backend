import express from 'express';
import { PaymentController } from './payment.controller';

const router = express.Router();

router.post('/success', PaymentController.success);
router.post('/fail', PaymentController.fail);

export const PaymentRoutes = router;
