import React from 'react'
import Questions from '../LandingPage/Questions'
import Accordion from '../Accordian'
import { faqDataSurat } from '../LandingPage/Questions'
const FAQs = () => {
  return (
    <div className='w-[100svw] flex justify-center my-16'>
        <div className='bg-[#F5F7FE] border-2 border-[#DBE3FF] md:w-[70%] w-[90%] flex md:flex-row flex-col p-8 gap-x-4 rounded-3xl text-textPrimary'>
            <div>
                <h1 className='text-3xl font-normal tracking-wider mb-2 max-w-[20rem]'>
                    FAQs for Packers and Movers in Surat
                </h1>
                <Accordion data={faqDataSurat} invert/>
            </div>

        </div>
    </div>
  )
}

export default FAQs