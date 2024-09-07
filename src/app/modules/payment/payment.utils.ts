import config from '../../config';
import axios from 'axios';

const initiatePayment = async ({
    amount,
    txId,
}: {
    amount: string;
    txId: string;
}) => {
    const response = await axios.post(config.payment_url!, {
        store_id: config.store_id,
        signature_key: config.signature_key,
        tran_id: txId,
        success_url: `http://localhost:5173/success?txid=${txId}`,
        fail_url: 'http://www.merchantdomain.com/faile dpage.html',
        cancel_url: 'http://www.merchantdomain.com/can cellpage.html',
        amount: amount,
        currency: 'BDT',
        desc: 'Merchant Registration Payment',
        cus_name: 'Name',
        cus_email: 'payer@merchantcusomter.com',
        cus_add1: 'House B-158 Road 22',
        cus_add2: 'Mohakhali DOHS',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1206',
        cus_country: 'Bangladesh',
        cus_phone: '+8801704',
        type: 'json',
    });

    return response.data;
};

export const PaymentUtils = {
    initiatePayment,
};
