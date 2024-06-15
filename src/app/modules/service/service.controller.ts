import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceService } from './service.service';

const createService = catchAsync(async (req, res) => {
    const result = await ServiceService.createServiceIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service created successfully',
        data: result,
    });
});

const getServiceById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ServiceService.getServiceByIdFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service retrieved successfully',
        data: result,
    });
});

const getAllServices = catchAsync(async (req, res) => {
    const result = await ServiceService.getAllServicesFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Services retrieved successfully',
        data: result,
    });
});

export const ServiceController = {
    createService,
    getServiceById,
    getAllServices,
};
