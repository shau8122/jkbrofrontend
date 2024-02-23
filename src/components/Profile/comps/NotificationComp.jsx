import React from 'react'
import { Button } from '../../../ui'

const NotificationComp = () => {
  return (
    <div className='lg:mx-2'>
      <h1 className='font-playfair text-2xl text-textPrimary'>Notification</h1>

      <div className='mt-5 flex flex-col gap-y-10 md:h-[100svh] md:overflow-y-scroll pr-[1rem] scrollbar-style'>
        { Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
          <div className='border-2 p-4 border-outline rounded-3xl bg-secondary '>
          <h1 className='border-b-2 border-outline border-dashed mb-2 pb-2'>Vehicle dispatched to Moving from location</h1>
          <p className='text-sm'>Driver Details</p>

          <div className='gap-4 my-[1rem] flex justify-between'>
            <div className='flex gap-[1rem]'>
              <div className='h-[2.5rem] w-[2.5rem] bg-gray-400 rounded-xl'>
              </div> 

              <div>
                <h1 className='text-sm'>Dhruvil Jogiwala</h1>
                <p className='text-sm text-gray-400'>+91 99999 99999</p>
              </div>
              </div>

              <div className='min-w-[5rem] h-[2.5rem]'>
                <button className='bg-primary p-2 px-4 rounded-3xl text-white'>
                  Call Us
                </button>
              </div>

          </div>

          <Button variant="secondary">
              <h1 className='text-'>
              Track Vehicle
              </h1>
          </Button>
          </div>
        ))}

      </div>
      
    </div>
  )
}

export default NotificationComp