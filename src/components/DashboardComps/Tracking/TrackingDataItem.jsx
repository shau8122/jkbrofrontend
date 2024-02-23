import React from 'react';
import Shipping from './Shipping';
import phone from '/assets/phone.svg';
import chat from '/assets/chat.svg';

const TrackingDataItem = ({ data }) => {
    return (
        <div className='grid flex-row bg-[#F5F7FE] justify-center grid-cols-2 lg:grid-cols-4 mx-auto my-4 p-4 border border-gray-300 rounded-xl'>
            <div className='mx-auto '>
                <div className='flex items-center mb-2'>
                    {data.status === 'On route' && (
                        <div className='bg-[#009444] border rounded-full w-2.5 h-2.5 border-outline mr-2'></div>
                    )}
                    {data.status === 'Waiting' && (
                        <div className='bg-[#4871FF] border rounded-full w-2.5 h-2.5 border-outline mr-2'></div>
                    )}
                    <p className='text-sm text-[#000000] mb-2 mt-2'>{data.status}</p>
                </div>

                <h3 className='text-[#000000]'>{data.id}</h3>

                <p className='text-sm text-[#858585] mt-1'>Distance</p>
                <p className='text-sm text-black mb-2'>{data.distance}</p>
                <p className='text-sm text-[#858585] mt-2'>Estimated Time</p>
                <p className='text-sm text-black mb-2'>{data.estimatedTime}</p>
            </div>

            <div className='mx-auto'>
                <p className='text-sm text-[#000000] mt-2 mb-5'>{data.location}</p>
                <Shipping />
            </div>

            <div className='mx-auto max-lg:mt-7'>
                <p className='text-sm text-[#000000] mt-2 mb-2'>Driver Info</p>
                <h3 className='text-[#000000]'>{data.driverName}</h3>
                <p className='text-sm text-[#858585] mt-4'>Id Number</p>
                <p className='text-sm text-black mb-2'>{data.idNumber}</p>
                <div className='flex gap-2'>
                    <button>
                        <img src={phone} alt='' />
                    </button>
                    <button>
                        <img src={chat} alt='' />
                    </button>
                </div>
            </div>

            <div className='mx-auto max-lg:mt-7'>
                <p className='text-sm text-[#858585] mt-2 mb-2'>{data.timeLeft}</p>
                <img src={data.image} className='h-[110px]' alt='' />
            </div>
        </div>
    );
};

export default TrackingDataItem;
