import React from 'react'
import mobileImage from '/assets/mobileImage.png'

const ShiftingProcess = () => {
  return (
    <div className='w-[100svw] flex justify-center mt-16'>
        <div className='bg-[#F5F7FE] border-2 border-[#DBE3FF] md:w-[70%] w-[90%] flex md:flex-row flex-col p-8 gap-x-4 rounded-3xl text-textPrimary'>
            
            <div className='flex-1'>
                <h1 className='text-3xl font-normal'>
                    House Shifting Process JKBro's Packers and Movers in Surat
                </h1>
                <div className='flex justify-center ml-[-2rem]'>
                <div className='relative w-max mt-[2rem] mb-[2rem]'>
                    <img src={mobileImage} alt="mobileFrame"/>
                </div>
                </div>
                <p className='opacity-70'>Book Professional Packers and Movers! You'll be required to follow the given steps to experience the best house shifting services.</p>        
            </div>

            <div className='flex-1'>
                <div className='border-b-2 py-2 border-dotted border-[#D8E3FF]'>
                    <h1 className='text-3xl flex-1'>1</h1>
                    <p className='opacity-70'>You'll be first required to choose the type of movement whether it's intracity or intercity followed by location details - origin and destination, and date of relocation.</p>
                </div>
                <div className='border-b-2 py-2 border-dotted border-[#D8E3FF]'>
                    <h1 className='text-3xl flex-1'>2</h1>
                    <p className='opacity-70'>Next, you'll get to choose the type and quantity of goods ranging from household goods, and appliances to office goods. Porter Packers and Movers offer you to select either carton boxes or gunny bags as per your requirement.</p>
                </div>
                <div className='border-b-2 py-2 border-dotted border-[#D8E3FF]'>
                    <h1 className='text-3xl flex-1'>3</h1>
                    <p className='opacity-70'>The next step will help you choose the type of house shifting service required. Porter Packers and Movers provide 3 different types of packages to choose from.</p>
                </div>
                <div className='border-b-2 py-2 border-dotted border-[#D8E3FF]'>
                    <h1 className='text-3xl flex-1'>4</h1>
                    <p className='opacity-70'>Now you are just a click away to relocate to your new house by confirming the booking. Porter Packers and Movers also make a confirmation call.</p>
                </div>
                <div className='border-b-2 py-2 border-dotted border-[#D8E3FF]'>
                    <h1 className='text-3xl flex-1'>5</h1>
                    <p className='opacity-70'>Porter packers and movers offer professional crew who provide on-time services on the scheduled date. The crew members are trained in packing and techniques of lifting and moving boxes without damage.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShiftingProcess