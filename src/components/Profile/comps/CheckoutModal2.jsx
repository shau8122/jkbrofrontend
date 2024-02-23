import React, { useState } from 'react';
import { Modal } from '../../../ui';
import { MapPin, PencilSimple } from 'phosphor-react';
import visaLogo from '/assets/visa-logo.svg';
import mastercardLogo from '/assets/Mastercard.svg';
import applepayLogo from '/assets/ApplePay.svg';
import googlepayLogo from '/assets/GooglePay.svg';
import CardValidator from 'card-validator';

const CheckoutModal2 = ({ open, setOpen, setSteps, onCloseClick, closeText }) => {
    const [selectedCard, setSelectedCard] = useState(null);
    const [cardNumber, setCardNumber] = useState('');
    const [isCardValid, setIsCardValid] = useState(false);

    const handleCardClick = (cardType) => {
        setSelectedCard(cardType);
    };

    const handleCardNumberChange = (event) => {
        let enteredNumber = event.target.value.replace(/\s/g, ''); // Remove spaces from the entered number
        enteredNumber = enteredNumber.replace(/\D/g, ''); // Remove non-numeric characters
    
        // Limit the length of the card number to 16 characters
        if (enteredNumber.length > 16) {
            enteredNumber = enteredNumber.slice(0, 16);
        }
    
        setCardNumber(enteredNumber);
    
        // Use card-validator to validate the entered card number and get the card type
        const cardValidation = CardValidator.number(enteredNumber);
        setIsCardValid(cardValidation.isValid && cardValidation.card);
    
        // Update selected card based on the detected card type
        if (cardValidation.card) {
            setSelectedCard(cardValidation.card.type);
        } else {
            setSelectedCard(null);
        }
    };

    return (
        <Modal
            open={true}
            setOpen={setOpen}
            onCloseClick={onCloseClick}
            submitText={"Confirm & Continue"}
            closeText={closeText}
            size="lg"
            title="Checkout"
            label={"Step 5 / 6"}
            onSubmitClick={() => setSteps(6)}
        >
            <div className='flex border-y-2 border-outline md:flex-row flex-col'>

                <div className='bg-[#F5F7FE] p-4 '>
                    {/* Disclaimer */}
                    <div className='md:w-[25rem] w-max ml-1'>
                        <p className='text-sm font-semibold'>Select a Payment Method</p>
                        <p className='text-xs text-gray-400'>Please Select a payment method most convenient to you.</p>
                    </div>

                    {/* Payment details */}
                    <div className='rounded-2xl cursor-pointer p-4 my-1 '>
                        <div className="flex gap-4 ">
                            <img
                                src={visaLogo}
                                alt="Visa"
                                className={`w-auto bg-white h-auto border-2 rounded-xl p-4 ${selectedCard === 'visa' ? 'border-blue-400' : 'border-grey'}`}
                                onClick={() => handleCardClick('visa')}
                            />
                            <img
                                src={mastercardLogo}
                                alt="Mastercard"
                                className={`w-auto  bg-white h-auto border-2 rounded-xl p-4 ${selectedCard === 'mastercard' ? 'border-blue-400' : 'border-grey'}`}
                                onClick={() => handleCardClick('mastercard')}
                            />
                            <img
                                src={applepayLogo}
                                alt="Apple Pay"
                                className={`w-auto bg-white h-auto border-2 rounded-xl p-4 ${selectedCard === 'applepay' ? 'border-blue-400' : 'border-grey'}`}
                                onClick={() => handleCardClick('applepay')}
                            />
                            <img
                                src={googlepayLogo}
                                alt="Google Pay"
                                className={`w-auto bg-white h-auto border-2 rounded-xl p-4 ${selectedCard === 'googlepay' ? 'border-blue-400' : 'border-grey'}`}
                                onClick={() => handleCardClick('googlepay')}
                            />
                        </div>
                    </div>


                    {/* Card Details */}
                   
                    <div className=' border-outline rounded-2xl p-4 my-4 flex flex-col gap-y-4'>
                        {/* <label htmlFor="cardNumber" className="text-xs -m-3 mx-1">Card Number</label>
                        <input type="text" id="cardNumber" placeholder="**** **** **** 4521" className="border text-xs p-2.5 rounded-xl" /> */}
                        <label htmlFor="cardNumber" className="text-xs -m-3 mx-1">Card Number</label>
                        <input
                            type="number"
                            id="cardNumber"
                            inputmode="numeric"
                            placeholder="**** **** **** 4521"
                            className={`border text-xs p-2.5 rounded-xl ${isCardValid ? 'border-green-400' : 'border-red-400'}`}
                            onChange={handleCardNumberChange}
                        />

                        <label htmlFor="cardName" className="text-xs mt-2 -m-3 mx-1">Name</label>
                        <input type="text" id="cardName" placeholder="Dhruvil Jogiwala" className="border text-xs p-2.5 rounded-xl" />

                        <div className=" md:flex gap-2 mt-2">
                            <div className="flex flex-col">
                                <label htmlFor="expirationDate" className="text-xs mb-1 mx-1">Expiration date</label>
                                <input type="text" id="expirationDate" placeholder="05/24" className="border text-xs p-2.5 rounded-xl" />
                            </div>
                            
                            <div className="flex flex-col mt-4 md:mt-0">
                                <label htmlFor="cvv" className="text-xs mb-1 mx-1">CVV</label>
                                <input type="text" id="cvv" placeholder="***" className="border text-xs p-2.5 rounded-xl" />
                            </div>
                            
                        </div>
                    </div>
                        {/* Checkboxes */}
                        <div className="flex items-center space-x-2 mt-2">
                        <input type="checkbox" id="saveCard" />
                        <label htmlFor="saveCard" className='text-xs'>My billing address is same to my <b>Moving to</b> address</label>
                        </div>

                        {/* Additional Checkbox */}
                        <div className="flex items-center space-x-2 mt-4">
                            <input type="checkbox" id="agreeTerms" />
                        <label htmlFor="agreeTerms" className='text-xs'>
                            My billing address is same to my <b>Moving from</b> address
                            </label>
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
                            <p className='text-xs font-bold pb-[0.5rem]'>₹ 2,698</p>
                            <p className='text-xs pb-[0.5rem]'>23/08/2023</p>
                            <p className='text-xs'>5</p>
                        </div>
                    </div>

                    <div className='border-b-2 border-opacity-50 border-outline md:min-w-[24rem] border-dashed py-[0.5rem] flex justify-between'>
                        <div className=''>
                            <p className='text-xs pb-[0.5rem] font-bold'>Vehicle</p>
                            <p className='text-xs pb-[0.5rem]'>Small truck</p>
                        </div>
                        <div className='text-right'>
                            <p className='text-xs font-bold pb-[0.5rem] text-primary'>-</p>
                            <p className='text-xs pb-[0.5rem]'>2</p>
                        </div>
                    </div>

                    <div className=' border-dashed py-[0.5rem] flex justify-between'>
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
    )
}

export default CheckoutModal2