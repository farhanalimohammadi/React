import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';


const tokenFromCookie = Cookies.get('token') || null;

const initialState = {
  user: null,
  token: tokenFromCookie, 
  remember: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.remember = action.payload.remember;

      // ذخیره توکن در کوکی
      if (action.payload.remember) {
        Cookies.set('token', action.payload.token, { expires: 7 }); 
      } else {
        Cookies.set('token', action.payload.token); 
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.remember = false;
      Cookies.remove('token'); 
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;