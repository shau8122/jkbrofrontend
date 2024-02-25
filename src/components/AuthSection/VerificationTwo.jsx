import React, { useState, useRef } from 'react';
import { Button} from '../../ui';
import { useNavigate } from 'react-router-dom';
import app from '../../../firebase'
import { getAuth, signInWithCredential, PhoneAuthProvider } from 'firebase/auth';
import axios from 'axios';
import { setUser } from '../../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

const VerificationTwo = () => {
    const baseUrl = import.meta.env.VITE_BACKEND_URL
    const dispatch = useDispatch()
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ]);

    const navigate = useNavigate()

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Focus on the next input box
        if (index < 5 && value !== '') {
            inputRefs.current[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, event) => {
        // Move to the previous input box on backspace if the current box is empty
        if (event.key === 'Backspace' && index > 0 && otp[index] === '') {
            inputRefs.current[index - 1].current.focus();
        }
    };

    const handleSubmit = async () => {
        try {
          const auth = getAuth(app);
          const verificationId = localStorage.getItem('verificationId');
          const newOtp = otp.join('');
      
          const credential = PhoneAuthProvider.credential(verificationId, newOtp);
          await signInWithCredential(auth, credential);
      
          const user = auth.currentUser;
      
          if (user) {
            // User is signed in
            const uid = user.uid;
            localStorage.setItem('phoneNumber', user.phoneNumber);
            
            console.log('User UID:', uid);
            localStorage.setItem('uid', uid);
      
            const userData = {
              displayName: '',
              email: '',
              uid: user.uid,
              // Add more properties as needed
            };
            console.log(userData);
      
            // Fetch user data from the backend API
            axios.get(`${baseUrl}user/${user.uid}`,{withCredentials:true})
              .then((response) => {
                console.log(response);
                navigate("/home");
                dispatch(setUser(response.data.user))
              })
              .catch((error) => {
                // Handle errors from API call
                if (error.response && error.response.status === 404) {
                  // Handle 404 error here
                  console.log("User not found");
                  navigate('/account', { state: { userData } });
                } else {
                  // Handle other errors
                  console.error("Error fetching user data:", error);
                  // Handle error appropriately (show a message, redirect, etc.)
                }
              });
          } else {
            // User is signed out
            console.log('User signed out');
          }
      
          // Clear verificationId from localStorage after successful verification
          localStorage.removeItem('verificationId');
        } catch (error) {
          console.error('Error verifying OTP:', error.message);
        }
      };
      
      



    const handleChangeClick = () => {
        // Add logic for handling "Change" button click
    };

    const handleResendClick = () => {
        // Add logic for handling "Resend OTP" button click
        navigate('/loginsignup');
    };

    return (
        <div className='flex-1 md:bg-gray-200 bg-white md:py-4  md:px-20 pt-1'>
            <div className='container flex  justify-between flex-col min-h-[80vh] md:h-full sm:p-10 mx-auto md:mb-2 md:mt-1 xl:mx-14 bg-white p-6  rounded-lg md:p-10 w-auto'>
                <div className="flex flex-col">
                    <h1 className=' text-textPrimary mb-10 font-playfair text-2xl'>Verification</h1>
                    <div className='flex justify-between '>
                        {/* <h4 className='mb-1 font-semibold'>+91 99999 99999</h4> */}
                        <button
                            onClick={handleChangeClick}
                            className='text-sm no-underline text-blue-500 hover:text-blue-700 focus:outline-none '
                        >
                            Change
                        </button>
                    </div>
                    <p className='text-left text-sm mb-12 lg:mb-1 text-zinc-400'>
                        One Time Password (OTP) has been sent to this number.
                    </p>
                    <div className='flex mb-1 lg:p-5 xl:p-10 gap-1 sm:gap-3 justify-center'>
                        {/* Four small boxes for OTP verification */}
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type='text'
                                placeholder='_'
                                maxLength='1'
                                value={value}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className='flex-1 text-center bg-gray-4  ml-1 w-1  h-auto p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
                                ref={inputRefs.current[index]}
                            />
                        ))}
                    </div>

                    {/* "Change" and "Resend OTP" buttons */}
                    <div className='flex justify-between mb-15 '>
                        <button
                            onClick={handleResendClick}
                            className='text-sm -mt-5 md:mb-9 text-blue-500 hover:text-blue-700 focus:outline-none '
                        >
                            Resend OTP
                        </button>
                    </div>
                </div>
               
                <div className=''>
                    {/* Submit button at the bottom */}
                    <Button onClick={handleSubmit} index={2}>Submit</Button>
                </div>
            </div>
        </div>
    );
};

export default VerificationTwo;
