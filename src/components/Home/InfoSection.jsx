import React from 'react'

const InfoSection = () => {
  return (
    <div className='w-[100svw] flex justify-center mt-16'>
        <div className='bg-[#F5F7FE] border-2 border-[#DBE3FF] md:w-[70%] w-[90%] flex md:flex-row flex-col p-8 gap-x-4 rounded-3xl text-textPrimary'>
            
            <h1 className='text-3xl flex-1 pb-10 font-normal'>
                Top House Shifting with best packers & Movers in Surat
            </h1>

            <div className='flex1'>
                <div className='border-b-2 py-2 border-dotted border-[#D8E3FF]'>
                    <h1 className='text-3xl flex-1'>Economical Prices</h1>
                    <p className='opacity-70'>Hassle-free house shifting services that fit your budget</p>
                </div>
                <div className='border-b-2 py-2 border-dotted border-[#D8E3FF]'>
                    <h1 className='text-3xl flex-1'>Damage-proof packaging</h1>
                    <p className='opacity-70'>Multi-layered packing to ensure safe movement of household goods</p>
                </div>
                <div className='border-b-2 py-2 border-dotted border-[#D8E3FF]'>
                    <h1 className='text-3xl flex-1'>On-time shifting</h1>
                    <p className='opacity-70'>Experience reliable house shifting services</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InfoSection