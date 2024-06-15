import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthService } from './auth.service';

const signup = catchAsync(async (req, res) => {
    const result = await AuthService.createUserIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User registered successfully',
        data: result,
    });
});

const login = catchAsync(async (req, res) => {
    const result = await AuthService.loginUserFromDB(req.body);

    res.status(httpStatus.OK).json({
        success: true,
        statusCode: httpStatus.OK,
        message: 'User logged in successfully',
        token: result?.accessToken,
        data: result?.loggedInUser,
    });
});

export const AuthController = {
    signup,
    login,
};
