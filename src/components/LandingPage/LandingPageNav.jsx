import React from 'react'
import { NavLink } from 'react-router-dom'
import jkbLogo from '/assets/jk-bro-logo.png'

const LandingPageNav = () => {
  return (
    <div className="relative flex items-center h-[10svh] w-[100svw]">
        {/* Image is for test, need to remove once that curve on nav is implemented */}
        
        <div className="absolute w-[50svw] flex items-center justify-between md:my-[0rem] my-[0.5rem]">
          <NavLink to="/">
            <img src={jkbLogo} className='lg:w-[5rem] md:w-[4rem] w-[3rem] ml-[1rem] md:ml-[10rem]'/>
          </NavLink>

          <NavLink to="/enterprise" className="md:mr-[1rem] mr-[0.2rem] hover:font-semibold transition text-xs md:text-sm">  
            For Enterprise
          </NavLink>

        </div>

        <div className="absolute w-[50svw] left-[50svw] flex justify-between">

          <NavLink to="/delivery" className=" hover:font-semibold transition text-xs md:text-sm">
            Delivery Partner
          </NavLink>

          <NavLink to="/support" className="md:mr-[10rem] mr-[1rem] hover:font-semibold transition text-xs md:text-sm">
            Support
          </NavLink>
          
        </div>
    </div>
  )
}

export default LandingPageNav