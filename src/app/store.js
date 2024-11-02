import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import jobReducer from '../slices/JobSlice';

const persistConfig = {
    key: 'root',
    storage,
};
const rootReducer = combineReducers({
    auth: authReducer,
    jobs:jobReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
 const store = configureStore({
    reducer: persistedReducer,
});

export default store;

export const persistor = persistStore(store);