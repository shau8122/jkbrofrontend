import { useState } from 'react';
import { Modal } from '../../ui';
import { CaretDown } from 'phosphor-react'; // Import CaretDown icon
import { useSelector } from 'react-redux';

const ConfirmBookingModal = ({ setSteps, onCloseClick, closeText, setData, data }) => {
    // Define arrays for shifting dates, shifting times, prices, and the dynamic numbers
    const currentDate = new Date();
    const shiftingDates = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + index);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });
    const numberOfItems = useSelector(state=>state.itemListState.totalItemCount)
    const shiftingTimes = ["6:00 AM - 8:00 AM", "8:00 AM - 10:00 AM", "10:00 AM - 12:00 PM", "12:00 PM - 1:00 PM", "2:00 PM - 4:00 PM", "4:00 PM - 6:00 PM"];
    const prices = [2689, 2750, 3000, 1000, 7000, 5000, 8000, 9000]; // Prices corresponding to each shifting date, adjust as needed
  
    // Coupons
    const coupons = ["BROS50", "BROS20", "BROS10"];
  
    // Global state object to store selected values
    const [selectedValues, setSelectedValues] = useState({
      selectedDate: null,
      selectedTime: null,
      selectedCoupon: null,
    });
  
   const selectedTruck = data?.truckDetails?.selectedTruck;
    // Choose a default price for display
    const defaultPrice = prices[0];
  
    const handleDateClick = (date) => {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        selectedDate: date === prevValues.selectedDate ? null : date,
        selectedTime: null, // Reset selected time when the date is changed
      }));
    };
  
    const handleTimeClick = (time) => {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        selectedTime: time === prevValues.selectedTime ? null : time,
      }));
    };
  
    const handleCouponClick = (coupon) => {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        selectedCoupon: coupon,
      }));
    };
  
    const toggleCouponDropdown = () => {
      setSelectedValues((prevValues) => ({
        ...prevValues,
        selectedCoupon: null, // Reset selected coupon when the dropdown is toggled
      }));
    };
   
    const handleSubmit = () => {
      
      if(selectedValues.selectedDate!=null && selectedValues.selectedTime!=null){
        setSteps(5); // Proceed to the next step

        setData((prevData) => ({...prevData, bookingDetails: selectedValues}));
      }
    };
  
    return (
      <Modal
        title="Confirm Booking"
        open={true}
        onCloseClick={onCloseClick}
        closeText={closeText}
        onSubmitClick={handleSubmit}
        submitText={"Confirm Booking"}
        label={"Step 4 / 6"}
      >
        <div className='flex border-y-2 border-outline md:flex-row flex-col'>
          <div className='bg-[#F5F7FE] p-4  '>
            <div className=''>
              <p className='text-sm'>Select Shifting Date</p>
              <div className="flex overflow-x-auto ">
                {shiftingDates.map((date, index) => (
                  <button
                    key={index}
                    className={`border-2 p-2 text-sm text-zinc-500 text-center bg-white rounded-xl m-2 focus:outline-none ${selectedValues.selectedDate === date ? 'border-blue-500' : 'border-gray-300'}`}
                    onClick={() => handleDateClick(date)}
                  >
                    <p>{date}</p>
                    <p>₹{prices[index]}</p>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className='text-sm mt-7 '>Select Shifting Time</p>
              <div className='text-center text-xs mx-auto mb-9 overflow-x-hidden'>
                <div className="container flex flex-col md:flex-row mx-auto">
                  {/* First three times horizontally */}
                  {shiftingTimes.slice(0, 3).map((time, index) => (
                    <button
                      key={index}
                      className={`border-2 p-2 m-2 rounded-xl bg-white focus:outline-none ${selectedValues.selectedTime === time ? 'border-blue-500' : 'border-gray-300'}`}
                      onClick={() => handleTimeClick(time)}
                    >
                      <p>{time}</p>
                    </button>
                  ))}
                </div>
                <div className="container flex flex-col md:flex-row mx-auto">
                  {/* Next three times below the first three */}
                  {shiftingTimes.slice(3).map((time, index) => (
                    <button
                      key={index}
                      className={`border-2 p-2 m-2 rounded-xl bg-white focus:outline-none ${selectedValues.selectedTime === time ? 'border-blue-500' : 'border-gray-300'}`}
                      onClick={() => handleTimeClick(time)}
                    >
                      <p>{time}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className='mt-7 mb-[5rem] '>
              <div className='flex items-center mt-2  '>
                <div className="relative w-full">
                  <input
                    type='text'
                    placeholder='  Apply code'
                    className='border-2 w-full rounded-xl p-2 mr-2 pr-8' // Add paddingRight for the arrow icon
                    readOnly
                    value={selectedValues.selectedCoupon || ''}
                    onClick={toggleCouponDropdown}
                  />
                  {/* Down arrow icon inside the input field */}
                  <div className="absolute cursor-pointer inset-y-0 right-0 flex items-center pr-2">
                    <CaretDown size={20} onClick={toggleCouponDropdown} />
                  </div>
                  {/* Coupons dropdown list */}
                  {selectedValues.selectedCoupon && (
                    <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
                      <div className="py-1">
                        {coupons.map((coupon, index) => (
                          <div
                            key={index}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${selectedValues.selectedCoupon === coupon ? 'bg-gray-100' : ''}`}
                            onClick={() => handleCouponClick(coupon)}
                          >
                            {coupon}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
  
          <div className='bg-primary p-[1rem] md:p-[1.5rem] md:max-w-[25rem] text-white '>
            <p className='text-sm mb-[1rem] border-b-2 border-opacity-50 border-outline border-dashed pb-[1rem]'>Order Summary</p>
  
            <div className='border-b-2 border-opacity-50 border-outline border-dashed pb-[1rem] flex justify-between'>
              <div className=''>
                <p className='text-xs pb-[0.5rem]'>Amount Quoted</p>
                <p className='text-xs pb-[0.5rem]'>Shifting Date</p>
                <p className='text-xs'>No. of items added</p>
              </div>
              <div className='text-right'>
                <p className='text-xs font-bold pb-[0.5rem]'>₹ {defaultPrice}</p>
                <p className='text-xs pb-[0.5rem]'>{selectedValues.selectedDate}</p>
                <p className='text-xs'>{numberOfItems}</p>
              </div>
            </div>
  
            {/* Vehicle details */}
            <div className='border-b-2 border-opacity-50 border-outline md:min-w-[24rem] border-dashed py-[0.5rem] flex justify-between'>
              <div className=''>
                <p className='text-xs pb-[0.5rem] font-bold'>Vehicle</p>
                <p className='text-xs pb-[0.5rem]'>{selectedTruck ? selectedTruck.type : '-'}</p>
              </div>
              <div className='text-right'>
                <p className='text-xs font-bold pb-[0.5rem] text-primary'>{selectedTruck ? selectedTruck.count : '-'}</p>
                {/* Number of vehicles */}
              </div>
            </div>
  
            {/* Booking amount */}
            <div className='border-dashed py-[0.5rem] flex justify-between'>
              <div className=''>
                <p className='text-xs pb-[0.5rem] font-bold'>Vehicle</p>
                <p className='text-xs pb-[0.5rem]'>Booking amount of ₹500/- needed to be paid for order confirmation</p>
              </div>
              <div className='text-right'>
                <p className='text-xs font-bold pb-[0.5rem]'>₹ 500</p>
                <p className='text-xs pb-[0.5rem]'>-</p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };
  
  

export default ConfirmBookingModal