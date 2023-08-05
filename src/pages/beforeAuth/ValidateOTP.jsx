import React, { useState } from 'react'
import SsidChartIcon from '@mui/icons-material/SsidChart';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import OTPInput from "otp-input-react";
import { userOtpverify } from '../beforeAuth/redux/loginSlice';
export default function ValidateOTP() {
  const validate=useSelector(state=>state);
  const [OTP, setOTP] = useState("");

    const navigate = useNavigate();
    const dispatch=useDispatch()
    const payload={
      otp:OTP,
      email:"adityag@gmail.com"
    }
    const handleverifyotp=()=>{
      dispatch(userOtpverify(payload))
      if(validate.user.otp){
        navigate('/update-password')
      }
    }
  return (
    <>
    <div className="login-bg">
         <div className="login-flow h-[480px] w-[564px] py-8 bg-[white] rounded  ">
         <div className="text-left-section text-center py-4">
        <p style={{lineHeight:"1"}} className='text-[28px]'>some<span className='text-[#FF6B6B]'>one</span><br />< SsidChartIcon sx={{color:"#FF6B6B"}}/>likeme </p>
        <br />
        <b className="text-2xl">Validate OTP</b>
        <p>Enter otp which is sent to your email id</p>
      </div>
        <div className="top-section px-8">
      <OTPInput
      value={OTP}
      onChange={setOTP}
      autoFocus
      OTPLength={6}
      otpType="number"
      disabled={false}
      inputClassName='otp-input'
    />
    <span className='text-[red]'>{validate.user.otpError}</span>
        </div>
         <div className="forget-pass p-8 px-16">
        <Button variant="contained" fullWidth onClick={handleverifyotp} className=" sigin-btn" sx={{padding:"10px",borderRadius:"83px",backgroundColor:"#FF6B6B",height:"56px",textTransform:"none"}} >Verify</Button>
        <div className="back-tosign-btn text-center py-4">
           <Button variant='text' fullWidth  sx={{padding:"10px",borderRadius:"83px",height:"56px",textTransform:"none",color:"#878787"}} onClick={()=>navigate('/forget-password')}> <ArrowBackIcon/>Back to Login</Button>
        </div>
         </div>
         </div>

      </div>

    </>
  )
}
