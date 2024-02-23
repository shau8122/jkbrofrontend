import React from 'react'
import HeroLandingPage from "/assets/heroLandingPage.png"

const PackersAndMoversSection = () => {
  return (
    <div className='w-[100svw] flex justify-center mt-16'>

        <div className='w-[90%] md:w-[70%] flex bg-primary p-4 rounded-xl gap-x-5 md:flex-row flex-col'>
            
            <div className='w-[100%] md:w-[50%] h-[100%] relative'>
                <img
                    src={HeroLandingPage}
                    className='h-full w-full object-cover object-center rounded-xl'
                    alt='Hero Image'
                />
            </div>

            <div className='flex-1 text-white'>
                <h1 className='text-4xl max-w-[15rem] pb-4 font-medium'>
                    Packers 
                    <br/>
                    & Movers in 
                    <br/>
                    SURAT
                </h1>
                <p className='text-sm'>
                    Relocation hassles in Surat? Not with JKBro's Packers and Movers!
                    <div className='mb-4'/>
                    We understand house shifting is full of hassles but to make your journey smooth, JKBro's Packers and Movers will pack and stack all your household goods while you can choose to relax. We are here to solve all your house shifting needs starting at Rs 1200. JKBro’s Packers and Movers offer an end-to-end relocation solution with zero manual intervention. Finalise the list of goods by following the Self-booking flow. You can choose the type of service as per the house size. Yes, we help you move from 1 RK to 5 BHK ane villas.
                    <div className='mb-4'/>
                    Next time when you search for the most reliable Packers and Movers in Surat, make research your priority. Check for packages, quotation breakups, and testimonials. With JKBro’s packers and movers you can select the number and type of goods you want to move and receive a quotation within 5 minutes. Doesn't this sound like the easiest way to relocate?
                    <div className='mb-4'/>
                    Book JKBro's Packers and Movers for moving in and outside Surat with zero stress. House shifting problems? Wave them a goodbye!
                </p>
            </div>

        </div>

    </div>
  )
}

export default PackersAndMoversSection