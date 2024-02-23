import { useState } from "react";

const Accordion = ({ data, invert, variant }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    

    return (  
      <div className="w-[100%] mx-auto mt-4">
      {data.map((item, index) => (
        <div key={index} className="mb-4 rounded">
          <div
            className={`flex gap-x-8 items-center py-4 cursor-pointer ${ variant === "legal" ? 'flex-row-reverse' : 'flex-row'}`}
            onClick={() => toggleAccordion(index)}
          > 
            { variant !== "legal" ? (
            <svg
              className={`w-6 h-6 transition-transform transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke={invert ? '#262262' : "white"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            ) : (
            <svg
              className={`w-6 h-6 transition-transform transform ${
                activeIndex === index
                  ? 'rotate-90' 
                  : '' 
              }`}
              fill="none"
              stroke={invert ? '#262262' : "white"}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            )}
            <div className="w-[90%]">
              <h2 className={`text-lg font-semibold ${invert && variant !== "legal" ? 'text-textPrimary' : variant === "legal" ? "text-black" :'text-white' }`}>{item.question}</h2>
            </div>
          </div>
          <div
            className={`${variant === "legal" ? "pr-14" : "px-14" } mb-4 transition-all overflow-hidden ${
              activeIndex === index ? 'max-h-[500px]' : 'max-h-0'
            }`}
          >
            { 
              variant === "legal" && item.jsx ? item.jsx :
            <p className={`${invert ? "text-[#262262]" : "text-gray-300"}`}>{item.answer}</p> }
          </div>
          
          {index < data.length - 1  &&  <div className={`w-[100%] border-b-2 border-dotted h-[0.01rem] ${invert ? 'bg-[#D8E3FF]' : '' }`}/> }

        </div>
      ))}
      </div>
    );
  };

  export default Accordion;