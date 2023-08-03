import axiosInstance from "../../axios";


export const getloginService = async (credentials) => {
  try {
    const response = await axiosInstance.post("/api/v1/admin/login", credentials);
   
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const forgetPassword = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/admin/forgot-password",data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

export const verifyOtp = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/admin/verify-otp",data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
export const updatePassword = async (data) => {
  try {
    const response = await axiosInstance.post("/api/v1/admin/reset-password",data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};
