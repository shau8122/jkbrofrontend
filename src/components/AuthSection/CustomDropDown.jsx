// CustomDropdown.js

import React, { useState } from 'react';

const CustomDropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (selectedValue) => {
        setIsOpen(false);
        onChange(selectedValue);
    };

    return (
        <div className='relative  w-full'>
            <div
                className='py-2 px-4 border-2 border-[#D8E3FF] rounded-xl cursor-pointer'
                onClick={handleToggle}
            >
                {value}
            </div>
            {isOpen && (
                <div className='relative top-full left-0 w-full  border-2 border-[#D8E3FF] rounded-xl overflow-hidden'>
                    {options.map((option) => (
                        <div
                            key={option}
                            className='py-2 px-4 cursor-pointer border-b border-[#D8E3FF] hover:bg-gray-200'
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomDropdown;
