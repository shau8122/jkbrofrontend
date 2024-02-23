import React from 'react'
import VerticalIndicator from './VerticalIndicator';
import ShippingStatus from './ShippingStatus';


const steps = [
    { id: 1,  display: 'Pickup', stepComplete: true },
    { id: 2,  display: 'Out For Delivery', stepComplete: true },
    { id: 3,  display: 'Delivered', stepComplete: false },
    
];

const Shipping = () => {
    return (
        <div className='md:w-[100%] text-sm text-grey-400 h-[100px]'>
            <div className='flex flex-col'>

                 <VerticalIndicator steps={steps} /> 
                {/* <ShippingStatus progress={steps} /> */}

       
            </div>
        </div>
    )
}

export default Shipping;