import React, { useState } from 'react'
import { Button, Input } from '../../ui'

const EditAdminProfile = () => {

  const [FormData, setFormData] = useState({
    name: '',
    date: {
      day: '',
      month: '',
      year: '',
    },
  })

  const handleOnChange = () => {}

  return (
    <div className='w-[70%] h-[100%] pl-5 flex flex-col gap-y-4'>
      <h1 className='font-playfair text-textPrimary text-xl'>Profile</h1>
      <img src="/assets/dummy-profile.png" className='w-[5rem] h-[5rem]'></img>
      <form className='flex flex-col gap-y-4'>
        <div className=''>
        <input type="text" id="floors"
            className="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-[#D8E3FF]" 
            placeholder="" 
            maxLength="30"
            // value={formData.movingFromFloor}
            // onChange={handleOnChange} 
            name='name'
            ></input>
            {/* <div className="text-red-500 text-sm">{formErrors?.movingFromFloor}</div> */}
        </div>

        <label>Birthdate
          <DateComponent value={FormData.date} onChange={handleOnChange}/>
        </label>

        <input type="text" id="role"
            className="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-[#D8E3FF]" 
            placeholder="" 
            maxLength="30"
            // value={formData.movingFromFloor}
            // onChange={handleOnChange} 
            name='role'
        />
            {/* <div className="text-red-500 text-sm">{formErrors?.movingFromFloor}</div> */}

        <input type="text" id="role"
              className="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-[#D8E3FF]" 
              placeholder="" 
              maxLength="30"
              // value={formData.movingFromFloor}
              // onChange={handleOnChange} 
              name='location'
        />

        {/* <div>
          <label>Upload Adhar Card</label>
          <input type="file" id="role"
                className="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-[#D8E3FF]" 
                placeholder="" 
                maxLength="30"
                // value={formData.movingFromFloor}
                // onChange={handleOnChange} 
                name='adharCard'
          />
        </div>

        <div>
          <label>Upload Pan Card</label>
          <input type="file" id="role"
                className="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-[#D8E3FF]" 
                placeholder="" 
                maxLength="30"
                // value={formData.movingFromFloor}
                // onChange={handleOnChange} 
                name='panCard'
          />
        </div> */}

        <div>
          <label>Availability status</label>
          <input type="text" id="role"
                className="bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-[#D8E3FF]" 
                placeholder="" 
                maxLength="30"
                // value={formData.movingFromFloor}
                // onChange={handleOnChange} 
                name='adharCard'
          />
        </div>

        <div className='w-[100%] md:w-[20rem]'>
          <Button onClick={() => {}}>Save</Button>
        </div>
      </form>  
    </div>
  )
}

export default EditAdminProfile


const DateComponent = ({ value, onChange }) => {
  const [date, setDate] = useState({
    day: '',
    month: '',
    year: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDate((prevDate) => ({
      ...prevDate,
      [name]: value,
    }));

    // Invoke the provided onChange callback with the updated date object
    onChange && onChange({ ...date, [name]: value });
  };

  return (
    <div className="flex space-x-2">
      <div className="">
        <input
          type="text"
          id="day"
          className="bg-gray-50 border-2 text-lg rounded-xl w-[3rem] sm:w-[5rem] md:w-[10rem] p-2 border-[#D8E3FF]"
          placeholder="dd"
          maxLength="2"
          value={value ? value.day : date.day}
          onChange={handleInputChange}
          name="day"
        />
      </div>
      <div className="">
        <input
          type="text"
          id="month"
          className="bg-gray-50 border-2 text-lg rounded-xl w-[3rem] sm:w-[5rem] md:w-[10rem] p-2 border-[#D8E3FF]"
          placeholder="mm"
          maxLength="2"
          value={value ? value.month : date.month}
          onChange={handleInputChange}
          name="month"
        />
      </div>
      <div className="">
        <input
          type="text"
          id="year"
          className="bg-gray-50 border-2 text-lg rounded-xl w-[3rem] sm:w-[5rem] md:w-[10rem] p-2 border-[#D8E3FF]"
          placeholder="yyyy"
          maxLength="4"
          value={value ? value.year : date.year}
          onChange={handleInputChange}
          name="year"
        />
      </div>
    </div>
  );
};

