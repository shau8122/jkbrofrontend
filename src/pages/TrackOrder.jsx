import React, { useState } from 'react'
import { HomeNav } from '../components'
import ordersNotFound from '/assets/ordersNotFound.svg'
import { OrderInfo } from '../components/TrackOrders'

const TrackOrder = () => {

  const [ orders, setOrders ] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


  return (
    <div className='overflow-x-hidden'>
        <HomeNav />
        { orders.length > 0 ? (
            <OrderInfo orders={orders}/>
        ) : 
        (
          <div className='w-[100svw] h-[90svh] flex justify-center items-center flex-col'>
            <div className='w-[30%] flex justify-center flex-col items-center gap-y-6'>
            <img src={ordersNotFound}/>
            <p className='text-gray-400'>Sorry, you have no Order to track.</p>
            <button className='bg-primary rounded-3xl px-1 md:px-2 text-white w-full p-2 hover:bg-blue-500'>
                    Proceed
            </button>
            </div>
          </div>
        )
        }
    </div>
  )
}

export default TrackOrder