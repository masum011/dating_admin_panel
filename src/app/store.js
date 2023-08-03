import { configureStore } from '@reduxjs/toolkit';
import  userLogin from "../pages/beforeAuth/redux/loginSlice";

export const store = configureStore({
  reducer: {
    user: userLogin
  },
});


export default store;
