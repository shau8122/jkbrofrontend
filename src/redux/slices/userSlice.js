import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: undefined,
    allUsers: [],
    isUsersLoading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoader: (state, action) => {
            state.isLoading = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        logoutUser: (state) => {
            state.user = undefined;
            state.isAuthenticated = false;
        },
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        setUsersLoader: (state, action) => {
            state.isUsersLoading = action.payload;
        }
    }
});

export const { setLoader, setUser, logoutUser, setAllUsers, setUsersLoader } = userSlice.actions;

export default userSlice.reducer;
