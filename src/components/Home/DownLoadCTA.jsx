import React from 'react'
import googlePlay from  '/assets/googleplay2.png'
import appstore from  '/assets/appstore1.png'

const DownLoadCTA = () => {
  return (
    <div className='w-[100svw] flex justify-center mt-8'>
        <button className='w-[80%] md:w-[70%] py-8 px-4 bg-[#F5F7FE] border-2 border-[#DBE3FF] rounded-3xl flex flex-col md:flex-row justify-between items-center hover:bg-[#D8E3FF]'>  
            <h1 className='px-8 text-xl font-semibold'>
                Download the App
            </h1>
            <div className='flex mt-2 md:mt-0 md:flex-row flex-col'>
                <img src={googlePlay} className='md:w-[12rem] w-[6rem]'/>
                <img src={appstore} className='w-[6rem] md:w-[12rem] '/>
            </div>
        </button>
    </div>
  )
}

export default DownLoadCTA