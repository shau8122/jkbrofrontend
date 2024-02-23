
import { NavLink } from 'react-router-dom';
import jkbLogo from '/assets/jk-bro-logo.png';

// import { UserSwitch } from 'phosphor-react';
import {Bell, Gear} from 'phosphor-react'

const AdminDashboardNav = () => {
  // const location = useLocation();
  // const currentPath = location.pathname;

  return (
    <div className='w-[100svw] h-[10svh] flex bg-[#F5F7FE] border-b-2 border-outline'>

      <div className='w-[30svw] flex items-center justify-start md:ml-16'>
        <NavLink to="/">
          <img src={jkbLogo} className='md:w-[5rem] w-[4rem] ml-[0.7rem] md:ml-[1rem]' alt='Logo' />
        </NavLink>
      </div>

      <div className='flex w-full items-center justify-start'>
   
        <input
          type='text'
          placeholder='Quick Search ...'
          className='ml-7 md:mr-4 p-[7px] w-[50vw]  md:w-[50vw] text-sm rounded-xl border border-[#4871FF] focus:outline-none'
        />

      
      </div>
      <div className="flex flex-end gap-3 mr-3 md:mr-10 py-4">
        <Bell size={22} />
        <Gear size={22} />
      </div>

    </div>
  );
}

export default AdminDashboardNav;
