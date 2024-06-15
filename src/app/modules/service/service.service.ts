import { TService } from './service.interface';
import { Service } from './service.model';

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

export const ServiceService = {
    createServiceIntoDB,
    getServiceByIdFromDB,
    getAllServicesFromDB,
};
