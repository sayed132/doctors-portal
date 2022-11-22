import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    const { price, slot, appointmentDate, treatment } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl">Payment for {treatment}</h2>
            <p className='text-xl'><i>please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</i></p>

            <div className="w-96 my-12 shadow-lg border-r-slate-300 border p-4 rounded-md">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;