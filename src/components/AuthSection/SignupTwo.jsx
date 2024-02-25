import { useState } from "react";
import axios from "axios";
import LogoGoogle from "/assets/icon--google@2x.png";
import LogoFacebook from "/assets/vector@2x.png";
import frame from "/assets/Frame.png";
import { NavLink } from "react-router-dom";
import { Button } from "../../ui";
import { useNavigate } from "react-router-dom";
import app from "../../../firebase";

import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { logoutUser, setUser } from "../../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const authentication = getAuth(app);

const SignupTwo = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const isAuthenticated = useSelector(
    (state) => state.userState.isAuthenticated
  );
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(authentication);
      axios.get(`${baseUrl}logout`).then(()=>console.log("Logout succesfull")
      ).catch(()=>{
        console.log("some error in logout")
      })
      dispatch(logoutUser());
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      authentication
    );
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    // Validate phone number: must be 10 digits
    if (/^\d{0,10}$/.test(inputPhoneNumber)) {
      setPhoneNumber(inputPhoneNumber);
    }
  };

  const handleCountryCodeChange = (e) => {
    setSelectedCountryCode(e.target.value);
  };

  const handleNextClick = async () => {
    if (phoneNumber && /^\d{10}$/.test(phoneNumber)) {
      try {
        generateRecaptcha();
        const appVerifier = window.recaptchaVerifier;

        const confirmationResult = await signInWithPhoneNumber(
          authentication,
          `${selectedCountryCode}${phoneNumber}`,
          appVerifier
        );
        const verificationId = confirmationResult.verificationId;

        // Store verificationId in localStorage for OTP verification
        localStorage.setItem("verificationId", verificationId);

        // Navigate to the OTP verification page
        navigate("/verification");
      } catch (error) {
        console.error("Error sending OTP:", error);
        alert("Failed to send OTP. Please try again.");
      }
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  // const handleGoogleLogin = async () => {
  //   try {

  //     await signInWithPopup(authentication, provider).then((user)=>{
  //       if(user) {
  //           setAuth(true);
  //           window.localStorage.setItem("auth","true");

  //           navigate('/home')
  //       }
  //     })

  //     // Handle successful Google sign-in, e.g., navigate to another page
  //   } catch (err) {
  //     console.log("error")
  //   }
  // };

  const provider = new GoogleAuthProvider();

  const handleGoogleSignUp = () => {
    signInWithPopup(authentication, provider)
      .then((result) => {
        const user = result.user;

        if (user) {
          const userData = {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
            // Add more properties as needed
          };

          console.log(userData);

          // Example of sending user ID to your backend
          axios
            .get(`${baseUrl}user/${user.uid}`,{withCredentials:true})
            .then((response) => {
              // Extract user data and token from the response data
              const { user} = response.data;
              
              // Now you can use both user data and token as needed
              dispatch(setUser(user));
              navigate("/home")
              
            })
            .catch((error) => {
              // Check if the error status is 404
              if (error.response && error.response.status === 404) {
                // Handle 404 error here
                console.log("User not found");
                // Redirect or display a message accordingly
                navigate("/account", { state: { userData } });
              } else {
                // Handle other errors
                console.error("Error fetching user data:", error);
                // Handle error appropriately (show a message, redirect, etc.)
              }
            });
        }
      })
      .catch((err) => {
        console.error("Error during Google sign-up:", err.message);
        // Handle error appropriately (show a message, redirect, etc.)
      });
  };

  // useEffect(() => {
  //   async function authChange() {
  //     await onAuthStateChanged(authentication, (user) => {
  //       if (user) {
  //         user.getIdToken().then((token) => {
  //           window.localStorage.setItem("auth", "true");
  //           validateUser(token).then((data) => {
  //             setUser(data);
  //           });
  //         });
  //       } else {
  //         setAuth(false);
  //         window.localStorage.setItem("auth", "false");
  //       }
  //     });
  //   }
  //   authChange();
  // }, []);

  const handleFacebookLogin = () => {
    // Add logic to handle Facebook login
  };

  return (
    <div className="flex-1 md:bg-gray-200 bg-white md:py-4 md:px-20 pt-1">
      <div className="container sm:p-10 mx-auto md:mb-2 md:mt-1 xl:mx-14 bg-white p-6  rounded-lg md:p-10 h-full w-auto">
        <h1 className="  text-textPrimary mb-5 font-playfair text-2xl">
          Welcome
        </h1>
        <h4 className="mb-1 text-lg font-semibold">Create a new account</h4>
        <p className="text-left  md:text-sm mb-12  text-zinc-400">
          With a valid number, you can access deliveries, and our other
          services.
        </p>
        <div className="flex -mb-3">
          <select
            value={selectedCountryCode}
            onChange={handleCountryCodeChange}
            className="  bg-gray-5  ml-1 p-2 border-2 font-[400] text-center border-[#D8E3FF] rounded-xl text-lg  mb-6 "
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+55">+55</option>
            <option value="+14">+14</option>
            <option value="+41">+41</option>
          </select>
          <input
            type="number"
            placeholder="Mobile Number"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="flex-1  bg-gray-5 text-center ml-1 font-[400] w-full p-2 border-2 border-[#D8E3FF] rounded-xl text-lg mb-6"
          />
        </div>

        <div className="mt-6 mb-4 space-y-2 flex flex-col items-center">
          <Button onClick={handleNextClick}>Next</Button>
          <div id="recaptcha-container" className="mt-4"></div>
          {isAuthenticated && (
            <p className="text-zinc-400 text-sm mt-2">
              <NavLink
                onClick={handleSignOut}
                className="text-blue-500 hover:underline"
              >
                Sign Out
              </NavLink>
            </p>
          )}
        </div>

        <div className="py-auto md:py-0"></div>
        <img src={frame} className="mx-auto mt-12 mb-12 " alt="" />
        <button
          onClick={handleGoogleSignUp}
          className="w-full  mt-5 mb-2 bg-gray-50 text-zinc-400 p-2  rounded-xl flex items-center justify-center hover:bg-gray-200 transition duration-300"
        >
          <img src={LogoGoogle} className="mr-10 h-6" alt="" />
          Signup with Google
        </button>
        {/* <button onClick={handleSignOut}>Signout</button> */}
        <button
          onClick={handleFacebookLogin}
          className="w-full  bg-gray-50 text-zinc-400 p-2 rounded-xl flex items-center justify-center hover:bg-gray-200 transition duration-300"
        >
          <img src={LogoFacebook} className="mr-8 h-6" alt="" />
          Signup with Facebook
        </button>
      </div>
    </div>
  );
};

export default SignupTwo;
