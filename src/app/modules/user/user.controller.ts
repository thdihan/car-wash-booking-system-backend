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

export const UserController = {
    getPersonalData,
};
