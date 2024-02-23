import React from 'react';
import truck from '/assets/truck.png';

import dots from '/assets/group-55@2x.png';

const VerificationOne = ({ logoSrc }) => {
    return (
        <div className='flex-1  bg-gray-200 md:bg-white md:p-8  pt-4 pb-1 h-screen flex flex-col justify-center items-center'>
            {/* Logo Image */}
            <img
                src={logoSrc}
                alt="Logo"
                className="w-36 h-auto mb-8 md:mb-8 mt-16"
            />

            {/* Truck Image */}
            <img
                src={truck}
                alt="Cycle Image"
                className="w-64 h-auto mb-8 md:block hidden"
            />

            <img
                src={dots}
                alt="Cycle Image"
                className="w-20 h-auto mb-8 md:block hidden"
            />

            {/* Text Content */}
            <p className="mb-4 ml-12 mr-12 text-center text-sm  lg:mb-1 text-zinc-400 md:block hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia doloremque labore harum ad, porro exercitationem. Similique saepe commodi quaerat odio?
            </p>
            {/* Add additional text content as needed */}
        </div>
    );
};

export default VerificationOne;
