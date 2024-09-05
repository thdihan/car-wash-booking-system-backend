import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { UserService } from './user.service';
import sendResponse from '../../utils/sendResponse';

const getPersonalData = catchAsync(async (req: Request, res: Response) => {
    const { userId } = req.query;

    const result = await UserService.getPersonalDataFromDB(userId as string);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Personal data retrieved successfully',
        data: result,
    });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
    const { id, payload } = req.body;

    const result = await UserService.updateProfileIntoDB({ id, payload });

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Profile updated successfully',
        data: result,
    });
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
    const result = await UserService.getAllUsersFromDB();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'All users retrieved successfully',
        data: result,
    });
});

export const UserController = {
    getPersonalData,
    updateProfile,
    getAllUsers,
};
