import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className="p-6"
            style={{
                background: `url(${appointment})`,
                backgroundSize: 'cover'
            }}
        >
            <form className="container lg:w-1/2 mx-auto p-12">
                <div className="text-center mb-12">
                    <h3 className="font-medium text-2xl text-primary mb-4">Contact Us</h3>
                    <h2 className="text-3xl text-white">Stay connected with us</h2>
                </div>

                <div className="form-control mb-6">
                    
                    <input type="text" placeholder="email" className="input input-bordered input-success" />
                </div>
                <div className="form-control mb-6">
                   
                    <input type="text" placeholder="subject" className="input input-bordered input-success" />
                </div>
                <div className="form-control mb-6">
                    <textarea className="textarea textarea-success" placeholder="type your message"></textarea>
                </div>
                <div className='text-center mt-6'>
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;