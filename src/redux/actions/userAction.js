import {
  setLoader,
  setUser,
  logoutUser,
  setUsersLoader,
  setAllUsers,
} from "../slices/userSlice";
import { setError } from "../slices/appSlice";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL
// sign up user
export const signUpAction = (formData) => async (dispatch) => {
  try {
    dispatch(setLoader(true));
    const { data } = await axios.post(
      `${baseUrl}user/new`,
      formData,
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch(setUser(data.user));
    dispatch(setLoader(false));
  } catch (err) {
    dispatch(setLoader(false));
    dispatch(setError(err.response.data.message));
  }
};

// get user
export const getUserAction = () => async (dispatch) => {
  try {
    dispatch(setLoader(true));
    const { data } = await axios.get("/api/v1/me");

    dispatch(setUser(data.user));
    dispatch(setLoader(false));
  } catch (err) {
    dispatch(setLoader(false));
  }
};

// // log out user
export const logoutAction = () => async (dispatch) => {
  try {
    dispatch(setLoader(true));
    console.log("hello")
    await axios.get(`${baseUrl}logout`);
    dispatch(logoutUser());
  } catch (err) {
    dispatch(setError(err.response.data.message));
  } finally {
    dispatch(setLoader(false));
  }
};
// update user data
export const updateUserAction = (formData) => async (dispatch) => {
  try {
    const { data } = await axios.put("/api/v1/me", formData, {
      headers: { "Content-Type": "application/json" },
    });

    dispatch(setUser(data.user));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};

// delete user account
export const deleteUserAction = () => async (dispatch) => {
  try {
    dispatch(setLoader(true));
    await axios.delete("/api/v1/me");

    dispatch(logoutUser());
    dispatch(setLoader(false));
  } catch (err) {
    dispatch(setError(err.response.data.message));
    dispatch(setLoader(false));
  }
};

// get all users -- admin
export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch(setUsersLoader(true));
    const { data } = await axios.get("/api/v1/admin/users");

    dispatch(setAllUsers(data.users));
    dispatch(setUsersLoader(false));
  } catch (err) {
    dispatch(setError(err.response.data.message));
    dispatch(setUsersLoader(false));
  }
};

// update user's role -- admin
export const updateUserRole = (id, role) => async (dispatch) => {
  try {
    const { data } = await axios.put(
      `/api/v1/admin/user/${id}`,
      { role },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch(setAllUsers(data.users));
  } catch (err) {
    dispatch(setError(err.response.data.message));
  }
};
