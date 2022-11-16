import React from 'react';
import chair from '../../../assets/images/chair.png'
import chairbg from '../../../assets/images/bg.png'

import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    let footer = <p>Please pick a day.</p>;
    if (selectedDate) {
        footer = <p>You picked {format(selectedDate, 'PP')}.</p>;
    }
    return (
        <div className="hero bg-banner" style={{
            background: `url(${chairbg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className=" rounded-lg lg:w-1/2 p-6 " alt='Chair' />
                <div className='lg:w-1/2 lg:ml-20 p-6'>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        footer={footer}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;