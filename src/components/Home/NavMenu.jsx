import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu = () => {
  return (
    <div className='w-[100svw] flex items-center justify-center'>
        <div className='md:w-[70%] w-[90%] border-b-2 border-dashed border-outline py-2 md:py-4 flex justify-between text-xs md:text-sm'>
            <div className=''>
                <ul className='flex gap-4'>
                    <li className='text-textPrimary font-semibold hover:font-bold transition'>
                    <NavLink to="/">City Tempo</NavLink> 
                    </li>
                    <li className='text-textPrimary font-semibold hover:font-bold transition'>
                    <NavLink to="/">Packers & Movers</NavLink> 
                    </li>
                    <li className='text-textPrimary font-semibold hover:font-bold transition'>
                    <NavLink to="/">Driver Partners</NavLink> 
                    </li>
                    <li className='text-textPrimary font-semibold hover:font-bold transition'>
                    <NavLink to="/">For Enterprise</NavLink> 
                    </li>
                </ul>
            </div>
            <div>
                    <p className='text-textPrimary font-semibold hover:font-bold transition'>
                    <NavLink to="/">Support</NavLink> 
                    </p>
            </div>
        </div>
    </div>
  )
}

export default NavMenu