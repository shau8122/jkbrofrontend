import { useState } from "react";

const Dropdown = ({ options, selectedValue, onValueChange, placeholder, label }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (value) => {
      onValueChange(value);
      setIsOpen(false);
    };
  
    return (
      <div className="relative mb-6">
        <label htmlFor="dropdown" className="mt-4 text-md text-gray-400">{label}</label>
        <div className="relative">
          <div
            className={`bg-gray-50 border-2 text-lg rounded-xl w-full p-2 border-outline ${isOpen ? 'border-primary' : ''} cursor-pointer flex justify-between items-center`}
            onClick={handleToggleDropdown}
          >
            <span>{selectedValue ? selectedValue.display : placeholder}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-4 w-4 transition-transform transform ${isOpen ? 'rotate-180' : ''}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
  
          <div
            className={`absolute top-0 left-0 mt-10 w-full bg-gray-50 border-2 border-t-0 rounded-b-xl border-outline overflow-y-auto max-h-40 ${isOpen ? 'block' : 'hidden'} scrollbar-style`}
          >
              {options.map((option) => (
                <div
                  key={option.value}
                  className={`p-2 cursor-pointer ${
                    selectedValue && selectedValue.value === option.value
                      ? 'bg-primary text-white'
                      : 'text-black hover:bg-outline hover:bg-opacity-45'
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.display}
                </div>
              ))}
          </div>
        </div>
      </div>
    );
};

export default Dropdown
