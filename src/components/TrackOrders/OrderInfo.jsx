import React from 'react'
import trackMapDemo from '/assets/trackMapDemo.png'
import ShippingInfo from './ShippingInfo'

const OrderInfo = ({ orders }) => {
  return (
    <div className='w-[100svw] flex justify-center'>

        <div className='md:w-[70%] w-[90%] py-14 flex md:flex-row flex-col md:justify-between flex-wrap gap-y-10'>
            
            <div className='md:w-[50%] flex-1'>
                {/* will be replaced by Map component */}
                <img src={trackMapDemo} className=''/>
            </div>

            <div className='flex-1 md:w-[50%]'>
                <ShippingInfo />
            </div>
        
        </div>

    </div>
  )
}

export default OrderInfo