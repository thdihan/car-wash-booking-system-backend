import { Types } from 'mongoose';

export type TVehicleType =
    | 'car'
    | 'truck'
    | 'SUV'
    | 'van'
    | 'motorcycle'
    | 'bus'
    | 'electricVehicle'
    | 'hybridVehicle'
    | 'bicycle'
    | 'tractor';

export type TBooking = {
    customer: Types.ObjectId;
    serviceId: Types.ObjectId;
    slotId: Types.ObjectId;
    vehicleType: TVehicleType;
    vehicleBrand: string;
    vehicleModel: string;
    manufacturingYear: number;
    registrationPlate: string;
};
