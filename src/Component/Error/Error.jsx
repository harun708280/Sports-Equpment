import Lottie from 'lottie-react';
import React from 'react';
import er from './A404.json'
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className="min-h-svh flex flex-col justify-center items-center">
                <h1><Lottie animationData={er} className='h-[200px]  md:h-[400px]'></Lottie></h1>
                <NavLink to='/'><button className='btn bg-custom-gradient text-white'>Back Home</button></NavLink>
            </div>
        </div>
    );
};

export default Error;