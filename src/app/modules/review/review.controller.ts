import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ReviewService } from './review.service';

const createReview = catchAsync(async (req, res) => {
    const result = await ReviewService.createReview(req.body);

    console.log('result', result);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Review created successfully',
        data: result,
    });
});

const getReviews = catchAsync(async (req, res) => {
    const result = await ReviewService.getReviews();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Reviews fetched successfully',
        data: result,
    });
});

export const ReviewController = {
    createReview,
    getReviews,
};
