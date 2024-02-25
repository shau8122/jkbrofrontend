import { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui';
import CustomDropdown from './CustomDropDown';
import { useLocation } from 'react-router-dom';
import validateUser from '../../utils/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

const AccountTwo = () => {
  const location = useLocation();
  const userData = location.state && location.state.userData;
  const mobile = localStorage.getItem("phoneNumber")
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [uid,setuid] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [purpose, setPurpose] = useState('Select'); // Default selected value is 'Select'
  const baseUrl = import.meta.env.VITE_BACKEND_URL
  


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleBirthdateChange = (field, value) => {
    setBirthdate((prevBirthdate) => ({
      ...prevBirthdate,
      [field]: value,
    }));
  };
  useEffect(() => {
    if (userData) {
      setName(userData.displayName || '');
      setEmail(userData.email || '');
      setuid(userData.uid || '');
    }
    console.log(userData)
  }, [userData]);

  const handlePurposeChange = (value) => {
    setPurpose(value);
  };

  const handleSubmit = async () => {
    // Create an object with the user data
    const userDataObject = {
      userId: uid,
      name,
      email,
      birthdate,
      purpose,
      mobile
    };
  
    try {
      // Make an API request with the user data
      const response = await axios.post(`${baseUrl}user/new`, userDataObject);
      const apiResponse = response.data; // Accessing data directly from response object
  
      console.log('API Response:', apiResponse);
      const role = apiResponse.user.role;
  
      // Redirect based on the 'role'
      if (role === 'admin') {
        navigate('/admindashboard');
        dispatch(setUser(response.data.user))
      } else {
        navigate('/home');
        dispatch(setUser(response.data.user))
      }
    } catch (error) {
      console.error('Error submitting user data:', error.message);
    }
  };
  

  // const isAllFieldsFilled =
  //   name !== '' &&
  //   email !== '' &&
  //   birthdate.day !== '' &&
  //   birthdate.month !== '' &&
  //   birthdate.year !== '' &&
  //   purpose !== '';
useEffect(() => {
      const fetchUserData = async () => {
        try {
          const userData = await validateUser();
          setName(userData.name);
          setEmail(userData.email);
        } catch (error) {
          console.error('Error fetching user details:', error.message);
        }
      };
  
      fetchUserData();
    }, []);
  return (
    <div className='flex-1 md:bg-gray-200 bg-white md:py-4  md:px-20 pt-1'>
      <div className='container flex justify-between flex-col  md:h-full sm:p-10 mx-auto md:mb-2 md:mt-1 xl:mx-14 bg-white p-6  rounded-lg md:p-10 w-auto'>
        <div className='flex flex-col'>
          <h1 className='text-textPrimary mb-10 font-playfair text-2xl'>Account Details</h1>
          <div className='mb-4'>
            <input
              type='text'
              id='name'
              placeholder='Enter your name'
              value={name}
              onChange={handleNameChange}
              className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
            />

            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              value={email}
              onChange={handleEmailChange}
              className='flex-1  bg-gray-5  ml-1 w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
            />

            <div className='birthdate-label'>
              <label className='label-text text-sm text-gray-700'>Birthdate</label>
            </div>
            <div className='flex -mb-2'>
              <div className='flex gap-3 small-input-container'>
                <input
                  type='text'
                  placeholder='DD'
                  value={birthdate.day}
                  onChange={(e) => handleBirthdateChange('day', e.target.value)}
                  className='flex-1 text-center bg-gray-5  ml-1 w-full h-10 p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
                />
                <input
                  type='text'
                  placeholder='MM'
                  value={birthdate.month}
                  onChange={(e) => handleBirthdateChange('month', e.target.value)}
                  className='flex-1 text-center bg-gray-5  ml-1 w-full h-10 p-2 border-2 border-[#D8E3FF] rounded-xl text-md mb-4'
                />
                <input
                  type='text'
                  placeholder='YYYY'
                  value={birthdate.year}
                  onChange={(e) => handleBirthdateChange('year', e.target.value)}
                  className='flex-1 text-center bg-gray-5 ml-1 w-full p-2 h-10 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6'
                />
              </div>
            </div>

            <label htmlFor='purpose' className='label-text text-sm text-gray-700'>
              I&apos;m here for...
            </label>
            <CustomDropdown
              options={['Select', 'Delivery', 'Other services']}
              value={purpose}
              onChange={handlePurposeChange}
            />
          </div>
        </div>

        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default AccountTwo;
