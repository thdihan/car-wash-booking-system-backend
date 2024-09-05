import { TReview } from './review.interface';
import { ReviewModel } from './review.model';

const createReview = async (review: TReview) => {
    const result = await ReviewModel.create(review);
    return result;
};

const getReviews = async () => {
    const result = await ReviewModel.find().populate('reviewerId');
    return result;
};

export const ReviewService = {
    createReview,
    getReviews,
};
