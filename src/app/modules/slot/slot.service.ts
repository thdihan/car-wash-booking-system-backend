import { TSlot, TSlotQuery } from './slot.interface';
import { Slot } from './slot.model';

const createSlotsIntoDB = async (payload: TSlot[]) => {
    const result = await Slot.insertMany(payload);
    return result;
};

const getSlotsFromDB = async (payload: TSlotQuery) => {
    const query: Partial<TSlotQuery> = {};
    if (payload.date) {
        query.date = payload.date;
    }
    if (payload.service) {
        query.service = payload.service;
    }
    const result = await Slot.find(query).populate('service');
    return result;
};

export const SlotService = {
    createSlotsIntoDB,
    getSlotsFromDB,
};
