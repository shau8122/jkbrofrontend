import { useSelector } from 'react-redux';
import { SignupOne, SignupTwo } from '../components';
import logojk from '/assets/layer-12@2x.png';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.userState.isAuthenticated);

  // Ensure isAuthenticated is explicitly set to false if it's undefined
  const isAuthenticatedValue = isAuthenticated !== undefined ? isAuthenticated : false;

  useEffect(() => {
    // Redirect to '/home' if user is already authenticated
    if (isAuthenticatedValue) {
      navigate('/home');
    }
  }, [isAuthenticatedValue, navigate]);

  return (
    <div className='flex md:flex-row flex-col'>
      <SignupOne logoSrc={logojk} />
      <SignupTwo />
    </div>
  );
};

export default SignUp;
