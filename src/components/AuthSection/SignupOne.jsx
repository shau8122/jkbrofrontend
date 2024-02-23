import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import cycle from '/assets/group@2x.png';
import worker from '/assets/worker.png';
import truck from '/assets/truck.png';
import scooter from '/assets/scooter.png'

const Slideshow = ({ images, currentIndex }) => {
    return (
        <div className="relative">
            <div className="flex items-center justify-center">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slideshow Image ${index}`}
                        className={`w-64 h-auto mb-8 md:block hidden transition-opacity ease-out duration-300 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        style={{ display: currentIndex === index ? 'block' : 'none' }}
                    />
                ))}
            </div>
            <div className="flex items-center justify-center mt-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};



const SignupOne = ({ logoSrc }) => {
    const location = useLocation();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [ worker, truck, scooter] ;

    useEffect(() => {
        let nextImageIndex = 0;

        if (location.pathname.includes('/verification')) {
            nextImageIndex = 1;
        } else if (location.pathname.includes('/account') ) {
            nextImageIndex = 2;
        }
        else if (location.pathname.includes('/emailscreen')) {
            nextImageIndex = 3;
        }

        setCurrentImageIndex(nextImageIndex);
    }, [location]);

    return (
        <div className='flex-1 bg-gray-200 md:bg-white md:p-4  h-screen flex flex-col justify-center items-center'>
            <img  src={logoSrc} alt="Logo" className="w-36 h-auto mb-8 md:mb-8 mt-16" />
            <div className='md:block  hidden'>
                <Slideshow images={images} currentIndex={currentImageIndex}/>
            </div>
            <p className="  mt-7 ml-12 mr-12 text-center text-sm lg:mb-1 text-zinc-400 md:block hidden">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia doloremque labore harum ad, porro exercitationem. Similique saepe commodi quaerat odio?
            </p>
           
        </div>
    );
};

export default SignupOne;
