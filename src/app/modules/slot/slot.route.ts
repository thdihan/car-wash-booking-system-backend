import express from 'express';
import { SlotController } from './slot.controller';

const router = express.Router();

router.get('/availability', SlotController.getSlots);
router.put('/:id', SlotController.updateSlot);

export const SlotRouter = router;
