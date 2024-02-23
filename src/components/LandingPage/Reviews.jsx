import React from 'react'
import dummyProfile from "/assets/dummy-profile.png"

const Reviews = () => {
  return (
    <div className='h-[80svh] w-[100svw] flex items-center justify-center'>
        <div className='md:w-[70%] w-[90%]'>
        <div className='max-h-[80%] border-2 border-[#DBE3FF] rounded-3xl p-6'>
            <h1 className='text-2xl font-semibold text-[#262262] h-[20%] mb-6'>Some words from our HAPPY customers</h1>

            <div className='Review-wrapper flex gap-x-4 overflow-x-auto scrollbar-style'>
                {Array.from({length: 5}).map((_, index) => (
                    <div className='min-w-[15rem] h-[16rem] border-2 border-[#DBE3FF] bg-[#F5F7FE] mb-5 rounded-3xl p-4' key={index}>
                        
                        <div className='h-[25%] flex gap-4'>
                            <div className=''>
                                <img src={dummyProfile} className='w-[2rem] h-[2rem]'/>
                            </div>
                            <div className='w-[70%]'>
                                <h1 className='font-semibold text-sm'>Dhruvil Jogiwala</h1>
                                <p className='text-xs text-gray-700'>Surat</p>
                            </div>    
                        </div>

                        <div className='h-[75%]'>
                            <p className='text-xs'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat explicabo obcaecati iusto quaerat odit sed accusamus quasi dicta atque magni. Vitae corporis accusantium fugiat quaerat dolore eius necessitatibus sit aliquid!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reviews