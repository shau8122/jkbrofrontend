import { UserCircleGear } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/userSlice";

const AdminNavigation = ({ onChange, value, config }) => {
  const [dashboardOption, setDashboardOption] = useState(value);
  const dispatch = useDispatch();
  const user = useSelector(state=>state.userState.user)
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = async (option) => {
    if (option.value === "logOut") {
      await signOut();
      dispatch(logoutUser());
      redirect("/");
      return;
    }

    setDashboardOption(option);
    setIsOpen(false);
    onChange(option);
  };

  useEffect(() => {
    setDashboardOption(config[0]);
    onChange && onChange(config[0]);
  }, []);

  const [userDetails, setUserDetails] = useState({});

  // useEffect(() => {
  //   // Retrieve UID from local storage
  //   const name = localStorage.getItem('displayName');
  //   console.log(name);
  //   const email = localStorage.getItem('email');

  //   // Check if UID is available
  //   if (storedUid) {
  //     // Fetch user details using UID
  //     const fetchUserDetails = async () => {
  //       try {
  //         console.log(storedUid);
  //         const apiUrl = `https://your-api-url/users/${storedUid}`;
  //         const response = await fetch(apiUrl);
  //         const userData = await response.json();

  //         // Assuming API returns an object with displayName and number properties
  //         const { displayName, number } = userData;

  //         // Set user details in state
  //         setUserDetails({ displayName, number });
  //       } catch (error) {
  //         console.error('Error fetching user details:', error.message);
  //       }
  //     };

  //     // Call the function to fetch user details
  //     fetchUserDetails();
  //   } else {
  //     console.warn('UID not found in local storage');
  //   }
  // }, []);

  return (
    <div
      className=" 
        md:bg-[#F5F7FE] bg-primary border-2 rounded-3xl border-[#DBE3FF] 
          py-[1.5rem] md:py-[0rem] md:pb-[8rem] w-[100%] z-10000"
    >
      {/* Mobile View Breakpoint */}
      <div className="md:hidden block">
        <div className="relative z-50">
          <div className="overflow-hidden px-[2rem]">
            <h1 className="font-playfair md:text-2xl text-xl text-white"></h1>
            <div className="flex items-center gap-2 w-max">
              <p
                className={`text-sm ${
                  dashboardOption?.value === "editProfile"
                    ? "text-gray-300"
                    : "text-gray-400"
                } `}
              >
                {" "}
              </p>
            </div>
          </div>
          <div
            onClick={toggleDropdown}
            className="flex items-center cursor-pointer justify-between px-[2rem] w-full "
          >
            <>
              <h1 className="text-white text-2xl">{dashboardOption?.title}</h1>
              <svg
                className={`ml-2 w-6 h-6 transition-transform transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="white"
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
            </>
          </div>
          <div
            className={`absolute left-0 w-full transition-all ${
              isOpen ? "top-full opacity-100" : "top-0 opacity-0"
            }`}
          >
            {isOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-b-3xl shadow-md w-full">
                {config.map(
                  (option) =>
                    option.value !== dashboardOption?.value && ( // Exclude the selected option
                      <div
                        key={option.value}
                        onClick={() => handleOptionClick(option)}
                        className="px-[2rem] py-[1rem] cursor-pointer hover:bg-[#C8D4FF] hover:bg-opacity-30 rounded-b-3xl"
                      >
                        {option.value === "editProfile" ? (
                          <>
                            <div className="flex items-center justify-between">
                              <h1 className="font-playfair md:text-2xl text-xl">
                               {user.name||""}
                              </h1>
                              <UserCircleGear
                                size={20}
                                weight="bold"
                                className="hover:text-bold"
                              />
                            </div>

                            <div className="flex items-center gap-2 flex-wrap">
                              <p
                                className={`text-sm ${
                                  dashboardOption?.value === option.value
                                    ? "text-gray-300"
                                    : "text-gray-400"
                                } `}
                              >
                                {" "}
                                {user.phoneNumber||"+91 99999 99999"}{" "}
                              </p>
                              <div
                                className={`w-[.2rem] h-[.2rem] rounded-full
                                  ${
                                    dashboardOption?.value === option.value
                                      ? "bg-gray-300"
                                      : "bg-gray-700"
                                  }
                                `}
                              ></div>
                            </div>
                          </>
                        ) : (
                          <h1>{option.title}</h1>
                        )}
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="md:block hidden">
        <div
          className={`cursor-pointer rounded-t-3xl flex justify-center flex-col px-[1rem] pb-[1rem] py-[2rem] border-b border-dotted border-[#C8D4FF] overflow-hidden
                        `}
        >
          <h1 className="font-playfair">{user.name||""}</h1>
          {/* <p className={`text-sm ${dashboardOption?.value === option.value  ? "text-gray-300": "text-gray-400"} `}> +91 99999 99999 </p> */}
          {/* <div className={`w-[.2rem] h-[.2rem] rounded-full
                          ${dashboardOption?.value === option.value  ? "bg-gray-300": "bg-gray-700"}
                        `}></div> */}
          <p className={`text-sm `}> {user.phoneNumber||"+91 99999 99999 "}</p>
        </div>
        {config.map((option) => (
          <div
            className={`${
                            dashboardOption?.value === option.value &&
                            option.value !== "contactUs"
                              ? "bg-primary text-white hover:bg-primary!"
                              : "hover:bg-[#C8D4FF] hover:bg-opacity-30 hover:text-black"
                          } 
                          px-[1rem] lg:px-[2rem] py-[1.5rem] border-b border-dotted border-[#C8D4FF] cursor-pointer transition-all 
                          `}
            key={option.value}
            onClick={() => handleOptionClick(option)}
          >
            <h1>{option?.title}</h1>
            <p
              className={`text-sm ${
                dashboardOption?.value === option.value &&
                option.value !== "contactUs"
                  ? "text-gray-300"
                  : "text-gray-400"
              } `}
            >
              {option?.subtitle}
            </p>
            {option.subSection?.title && (
              <div className="flex py-[1rem] mt-4 border-t border-dotted border-[#C8D4FF]">
                {option.subSection.title}
                <Link className="px-2 text-primary">
                  {option.subSection.email}
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminNavigation;
