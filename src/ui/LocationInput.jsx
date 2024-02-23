



import { MapPin } from 'phosphor-react';
import React, { useState } from 'react';



const LocationInput = ({
  setFormData,
  formData,
  name,
  value,
  label,
  formErrors,
  id,
  placeholder
}) => {
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    setFormData({ ...formData, [name]: e.target.value });

    // Fetch location suggestions from the Google Places API via the server
    const apiUrl = `http://localhost:3001/api/places`;
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: formData[name], apiKey: apiKey }),
      });

      const data = await response.json();

      if (data.status === 'OK') {
        setSuggestions(data.predictions);
      } else {
        console.error('Error fetching location suggestions:', data.status);
      }
    } catch (error) {
      console.error('Error fetching location suggestions:', error);
    }
  };

  return (
    <div className="relative">
      <div className=''>
        <label for={id} className="mt-4 text-md text-gray-400">{label}</label>
        <div className="relative">
          <input
            type="text"
            class=" border-2 text-lg border-[#D8E3FF] rounded-xl w-full p-2"
            placeholder={placeholder}
            name='movingFrom'
            value={value}
            onChange={handleChange}
          ></input>
          <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none bg-white rounded-r-xl border-r-2 border-y-2 shadow-sm px-2 justify-center border-[#D8E3FF]">
            <MapPin size={20} color={"#383838"} />
          </div>
        </div>
        <div className="text-red-500 text-sm">{formErrors?.movingFrom}</div>
      </div>
      {(
        <ul className={`transition duration-300 ease-out ${suggestions.length > 0 ? 'block h-max' : 'hidden h-0'} absolute z-10 w-full mt-2 border border-gray-300 rounded-md bg-white`}>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setFormData({
                  ...formData,
                  [name]: suggestion.description,
                });
                setSuggestions([]);
              }}
            >
              {suggestion.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;