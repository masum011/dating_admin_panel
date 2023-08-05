import React from "react";
import { useForm } from "react-hook-form";
import SsidChartIcon from "@mui/icons-material/SsidChart";
import { Button, TextField } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userForgetPass } from "./redux/loginSlice";
export default function ForgetPassword() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: {  isValid, isDirty },
  } = useForm();

  const onSubmit = async (data) => {
    dispatch(userForgetPass(data));
    if (user.isLoggedIn) {
      navigate("/validate-otp");
    }
  };

  return (
    <>
      <div className="login-bg">
        <div className="login-flow h-[480px] w-[464px] py-8 bg-[white] rounded  ">
          <div className="text-left-section text-center py-4">
            <p style={{ lineHeight: "1" }} className="text-[28px]">
              some<span className="text-[#FF6B6B]">one</span>
              <br />
              <SsidChartIcon sx={{ color: "#FF6B6B" }} />
              likeme{" "}
            </p>
            <br />
            <b className="text-2xl">Forgot Password</b>
            <p>A reset email will be sent to your email id</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-input-filed py-4 px-8">
              <TextField
                type="email"
                label="Email Id"
                fullWidth
                variant="outlined"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <span className="text-[red]">{user.forgetError}</span>
            </div>
            <div className="forget-pass p-8">
              <Button
                variant="contained"
                type="submit"
                className="w-full sigin-btn"
                sx={{
                  padding: "10px",
                  borderRadius: "83px",
                  backgroundColor: "#FF6B6B",
                  height: "56px",
                  textTransform: "none",
                }}
                disabled={!isDirty || !isValid}
              >
                Request new password
              </Button>
              <div className="back-tosign-btn text-center py-4">
                <Button
                  variant="text"
                  fullWidth
                  sx={{
                    padding: "10px",
                    borderRadius: "83px",
                    height: "56px",
                    textTransform: "none",
                    color: "#878787",
                  }}
                  onClick={() => navigate("/login")}
                >
                  {" "}
                  <ArrowBackIcon />
                  Back to Login
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
