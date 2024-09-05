import { Types } from 'mongoose';

export type TReview = {
    reviewerId: Types.ObjectId;
    reviewText: string;
    rating: number;
    reviewDate: string;
};
