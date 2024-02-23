import React from 'react'
import { GenerateQuotation, LandingPageNav, MapView, ServicesCards, Reviews, Questions, Footer } from '../components'
import { NavLink } from 'react-router-dom'
import rightArrow from "/assets/quotation-arrow.png"

const LandingPage = () => {
  return (
    <div className='overflow-x-hidden h-[100svh]'>
        <LandingPageNav />
        <GenerateQuotation /> 
        <ServicesCards />
        <MapView />
        <Reviews />
        <Questions />
        <Footer />

          <div className='flex w-[90%] justify-center absolute bottom-2 shadow-xl m-[1rem] md:hidden z-[2000000]'>
            <NavLink
                to="/home" 
                className='group bg-primary rounded-3xl md:p-1 hover:bg-primary-200 tranition w-full shadow-2xl shadow-white'>
                <div className='min-w-[10rem] max-h-max relative p-6 flex lg:flex-col justify-between'>
                    <h1 className='w-[7rem] text-xl font-semibold text-white tracking-wide'>
                        Get Quotation
                    </h1>
                        <br/>
                    <h1 className='w-[7rem] text-2xl font-thin text-[#48aeff] tracking-wide group-hover:text-primary-400 transition'>
                        <span className='text-white'>
                            In just 2 mins
                        </span>
                    </h1>
                    <img src={rightArrow} className='mt-[1rem] w-[4rem] '/>
                </div>
            </NavLink>
          </div>
          
    </div>
  )
}

export default LandingPage

{/* <div className=''>
            <div className='bubble'/>
            <div className='h-[30rem] w-[30rem] bg-red-400'></div>
        </div> */}