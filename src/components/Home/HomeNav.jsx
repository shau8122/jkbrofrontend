import { NavLink, Navigate, useLocation } from "react-router-dom";
import jkbLogo from "/assets/jk-bro-logo.png";
import { CaretRight, UserCircle } from "@phosphor-icons/react";
import crossHair from "/assets/crosshair.png";
import crossHairBold from "/assets/crosshairbold.png";
import axios from 'axios'

import { UserSwitch } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { logoutUser } from "../../redux/slices/userSlice";
import app from "../../../firebase";
const authentication = getAuth(app);
const HomeNav = () => {
  const baseUrl = import.meta.env.VITE_BACKEND_URL
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state) => state.userState.isAuthenticated
  );

  const user = useSelector((state) => state.userState.user);
  console.log(user.role)
  const location = useLocation();
  const currentPath = location.pathname;
  const handleLogout = async() => {
      try {
        await signOut(authentication);
        axios.get(`${baseUrl}/logout`).then(()=>console.log("Logout succesfull")
        ).catch(()=>{
          console.log("some error in logout")
        })
        dispatch(logoutUser());
      } catch (error) {
        console.error("Error signing out:", error.message);
      }
  
  };
  const handleLogin = () => {
    Navigate("/loginsignup");
  };

  return (
    <div className="w-[100svw] h-[10svh] flex bg-[#F5F7FE] border-b-2 border-outline">
      <div className="w-[50svw] flex items-center justify-start md:ml-16">
        <NavLink to="/">
          <img
            src={jkbLogo}
            className="md:w-[5rem] w-[4rem] ml-[1rem] md:ml-[10rem]"
          />
        </NavLink>
      </div>

      <button
        className=""
        onClick={() => (isAuthenticated ? handleLogout() : handleLogin())}
        title="This is temp button to switch between logged in and logged out view"
      >
        <UserSwitch
          size={32}
          className="bg-primary text-white rounded-full hover:text-black p-1 transition md:mr-[0rem] mr-[3rem]"
        />
      </button>

      <div className="w-[50svw] flex items-center justify-center">
        {!isAuthenticated ? (
          <div className="flex gap-x-2 md:gap-x-4 items-center">
            <div className=" w-max md:px-4 md:py-2 px-4 py-1 rounded-full flex md:gap-x-4 border-2 border-outline">
              <div className="md:leading-3">
                <h1 className="text-[0.5rem] md:text-xs font-bold tracking-[0.1rem]">
                  DRIVE WITH US
                </h1>
                <p className="text-xs">turn kms into money</p>
              </div>
              <button className="bg-primary rounded-full px-1 md:px-2 text-white">
                <div className="flex md:gap-x-10 px-2 items-center">
                  <p className="text-[0.5rem] md:text-xs font-semibold">
                    JOIN US
                  </p>
                  <CaretRight size={16} weight="bold" />
                </div>
              </button>
            </div>

            <NavLink to="/loginsignup" className="mr-0 md:mr-4">
              <h1 className="text-sm font-semibold text-textPrimary">
                Log in / Sign Up
              </h1>
            </NavLink>
          </div>
        ) : (
          <div className="flex gap-x-2 md:gap-x-4 items-center text-textPrimary font-semibold">
            <NavLink
              to={"/tracking"}
              className={`flex items-center gap-1 h-[10svh] transition-all ${
                currentPath === "/tracking"
                  ? "active border-b-4 border-textPrimary px-2 font-bold"
                  : "inactive h-[10svh] px-2"
              }`}
            >
              {/* 'flex items-center gap-1 h-[10svh] border-b-4 border-textPrimary px-2 bg-[#]' */}
              <img
                src={currentPath === "/tracking" ? crossHairBold : crossHair}
                className="w-[1rem] h-[1rem]"
              />
              <p>Your Tracking</p>
            </NavLink>

            <NavLink
              to={user.role==='admin'?"/admindashboard":"/profile"}
              className={`flex items-center gap-1 h-[10svh] transition-all ${
                currentPath === "/profile"
                  ? "active border-b-4 border-textPrimary px-2 font-bold"
                  : "inactive h-[10svh] px-2"
              }`}
            >
              <UserCircle
                size={20}
                weight={currentPath === "/profile" ? "bold" : "light"}
              />
              <p>Hello, {user ? user.name?.split(" ")[0] : "Guest"}</p>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeNav;
