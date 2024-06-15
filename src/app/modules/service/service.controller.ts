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

    if (result) {
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Service retrieved successfully',
            data: result,
        });
    } else {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: 'No Data Found',
            data: result,
        });
    }
});

const getAllServices = catchAsync(async (req, res) => {
    const result = await ServiceService.getAllServicesFromDB();

    if (result?.length > 0) {
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: 'Services retrieved successfully',
            data: result,
        });
    } else {
        sendResponse(res, {
            success: false,
            statusCode: httpStatus.NOT_FOUND,
            message: 'No Data Found',
            data: result,
        });
    }
});

const updateService = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ServiceService.updateServiceIntoDB(id, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service updated successfully',
        data: result,
    });
});

const deleteService = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ServiceService.deleteServiceFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Service deleted successfully',
        data: result,
    });
});

export const ServiceController = {
    createService,
    getServiceById,
    getAllServices,
    updateService,
    deleteService,
};
