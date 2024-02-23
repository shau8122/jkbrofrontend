import { configureStore } from '@reduxjs/toolkit'; // Change import to applyMiddleware

import appReducer from './slices/appSlice';
import userReducer from './slices/userSlice';
import itemListReducer from './slices/itemListSlice';
import { saveState, loadState } from './localstorage';

const reducer = {
    appState: appReducer,
    userState: userReducer,
    itemListState: itemListReducer,
};

const persistedState = loadState();



const store = configureStore({
    reducer,
    preloadedState: persistedState
});

window.addEventListener('beforeunload', () => {
    saveState(store.getState());
});

export default store;
