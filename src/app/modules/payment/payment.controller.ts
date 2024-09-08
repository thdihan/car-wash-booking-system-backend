import catchAsync from '../../utils/catchAsync';

const success = catchAsync(async (req, res) => {
    const txId = req.query.txid;
    res.redirect(
        `https://car-wash-booking-system-client-five.vercel.app/success?txid=${txId}`,
    );
});

const fail = catchAsync(async (req, res) => {
    res.redirect('https://car-wash-booking-system-client-five.vercel.app/fail');
});

export const PaymentController = {
    success,
    fail,
};
