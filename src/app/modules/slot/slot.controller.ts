import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TSlot } from './slot.interface';
import { SlotService } from './slot.service';
import { getCurrentTimeIn24HourFormat } from '../../utils/timeConverter';
import { ServiceService } from '../service/service.service';
import AppError from '../../utils/appError';

const createSlots = catchAsync(async (req, res) => {
    const { service, date, startTime, endTime } = req.body;

    // Checking if the services is deleted or not
    const serviceInfo = await ServiceService.getServiceByIdFromDB(service);
    if (serviceInfo?.isDeleted) {
        throw new AppError(httpStatus.NOT_FOUND, "Service doesn't exists.");
    }

    // Making a slot array. Each slot is of 1 hour
    const slots: TSlot[] = [];

    // Converting string to date
    const start = new Date(`${date}T${startTime}`);
    const end = new Date(`${date}T${endTime}`);

    const interval = 60 * 60 * 1000; // 60 minutes

    // Creating slots
    for (let i = start.getTime(); i < end.getTime(); i += interval) {
        const slot: TSlot = {
            service: req.body.service,
            date,
            startTime: getCurrentTimeIn24HourFormat(new Date(i)),
            endTime: getCurrentTimeIn24HourFormat(new Date(i + interval)),
            isBooked: 'available',
        };
        slots.push(slot);
    }

    // Creating multiple slot at once
    const result = await SlotService.createSlotsIntoDB(slots);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Slots created successfully',
        data: result,
    });
});

const getSlots = catchAsync(async (req, res) => {
    const { date, serviceId } = req.query;

    const result = await SlotService.getSlotsFromDB({
        date: date as string,
        service: serviceId as string,
    });

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Available slots retrieved successfully',
        data: result,
    });
});

export const SlotController = {
    createSlots,
    getSlots,
};
