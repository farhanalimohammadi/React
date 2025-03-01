import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice'; 
import routeReducer from './Slices/routeSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    route: routeReducer,
  },
});

export default store;