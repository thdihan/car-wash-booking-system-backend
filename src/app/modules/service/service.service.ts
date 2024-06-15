import { TService } from './service.interface';
import { Service } from './service.model';
import AppError from '../../utils/appError';
import httpStatus from 'http-status';

const createServiceIntoDB = async (payload: TService) => {
    const result = await Service.create(payload);
    return result;
};

const getServiceByIdFromDB = async (id: string) => {
    const result = await Service.findById(id);
    return result;
};

const getAllServicesFromDB = async () => {
    const result = await Service.find();
    return result;
};

const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
    // Checking if service is deleted.
    const isServiceExists = await getServiceByIdFromDB(id);
    const isDeleted = isServiceExists?.isDeleted;
    if (isDeleted) {
        throw new AppError(httpStatus.NOT_FOUND, "Service doesn't exists.");
    }
    const result = await Service.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteServiceFromDB = async (id: string) => {
    // Checking if service is already deleted.
    const isServiceExists = await getServiceByIdFromDB(id);
    const isDeleted = isServiceExists?.isDeleted;
    if (isDeleted) {
        throw new AppError(httpStatus.NOT_FOUND, "Service doesn't exists.");
    }
    const result = await Service.findByIdAndUpdate(
        id,
        { isDeleted: true },
        { new: true },
    );
    return result;
};
export const ServiceService = {
    createServiceIntoDB,
    getServiceByIdFromDB,
    getAllServicesFromDB,
    updateServiceIntoDB,
    deleteServiceFromDB,
};
