import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  forgetPassword,
  getloginService,
  verifyOtp,
  updatePassword
} from "../../../utils/service/login";

export const userLogin = createAsyncThunk("login/userLogin", async (data) => {
  const response = await getloginService(data);
  localStorage.setItem("token", response.token);
  return response.data;
});


export const userForgetPass = createAsyncThunk("user/forget-password", async (data) => {
  const response = await forgetPassword(data);
  return response.data;
});

export const userOtpverify = createAsyncThunk("otp-verify", async (data) => {
      const response = await verifyOtp(data);
      return response.data;
    }
);

export const adminUpdatePass= createAsyncThunk('admin/update/password', async(data)=>{
  const response = await updatePassword(data);
  console.log(response,"thunk")
  return response;
})
const userSlice = createSlice({
  name: "user/login",
  initialState: {
    isLoggedIn: false,
    isLoading: false,
    user: null,
    userError: null,
    forgetError:null,
    otpError:null,
    newPassword:null,
    secretId:null,
    updatecheck:null,
    
  },
  reducers: {
    // Define any synchronous reducers if needed
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
      state.userError = null;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.userError = action.error.message;
      state.isLoading = false;
    });


    builder.addCase(userForgetPass.pending, (state) => {
      state.isLoading = true;
      state.forgetError = null;
    });
    builder.addCase(userForgetPass.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    });
    builder.addCase(userForgetPass.rejected, (state, action) => {
      state.forgetError = action.error.message;
      state.isLoading = false;
    });


    builder.addCase(userOtpverify.pending, (state) => {
      state.isLoading = true;
      state.otpError = null; 
    });
    builder.addCase(userOtpverify.fulfilled, (state, action) => {
      state.otp = action.payload; 
      state.isLoading = false;
    });
    builder.addCase(userOtpverify.rejected, (state, action) => {
      state.otpError = action.error.message;
      state.isLoading = false;
    });

    builder.addCase(adminUpdatePass.pending, (state) => {
      state.isLoading = true;
      state.otpError = null; 
    });
    builder.addCase(adminUpdatePass.fulfilled, (state, action) => {
      state.updatecheck = action.payload.success; 
      state.isLoading = false;
    });
    builder.addCase(adminUpdatePass.rejected, (state, action) => {
      state.otpError = action.error.message;
      state.isLoading = false;
    });


  },
});

export const { userslicelogin } = userSlice.actions;
export default userSlice.reducer;
