import React from 'react'
import { MapPin } from '@phosphor-icons/react'

const SelectCityDropdown = () => {
  return (
    <div className='w-max p-2 rounded-3xl bg-[#F5F7FE]-200 flex gap-x-4 mb-4 border-2 border-[#DBE3FF]'>
            <label className='flex gap-x-1 items-center'>
                <MapPin color="#4871FF" weight="fill" size={20} />
                City
            </label>

            <select name="location" id="location" className='rounded-3xl w-max border-2 border-[#DBE3FF] cursor-pointer px-2 font-semibold'>
                <option value="volvo">Surat</option>
                <option value="saab">Ahmedabad</option>
                <option value="mercedes">Mumbai</option>
                <option value="audi">Rajasthan</option>
            </select>
    </div>
  )
}

export default SelectCityDropdown