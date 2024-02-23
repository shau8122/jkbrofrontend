import { useState } from "react";

const Input = ({ type, label, register, errors, placeholder, inputProps = {} }) => {
  return (
    <div className='mb-6'>
      <label htmlFor={type} className="mt-4 text-md text-gray-400 capitalize">
        {label}
      </label>
      <input
        type="text"
        id={type}
        {...register(type, inputProps)}  // Register the input with react-hook-form
        className={`bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-outline ${errors[type] ? 'border-red-500' : ''}`}
        placeholder={placeholder}
      />
      {errors[type] && <p className="text-red-500 text-sm mt-1">{errors[type].message}</p>}
    </div>
  );
};
  
export default Input;