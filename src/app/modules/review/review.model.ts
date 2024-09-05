import { Schema, model } from 'mongoose';
import { TReview } from './review.interface';

const ReviewSchema = new Schema<TReview>(
    {
        reviewerId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        reviewText: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        reviewDate: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export const ReviewModel = model<TReview>('Review', ReviewSchema);
