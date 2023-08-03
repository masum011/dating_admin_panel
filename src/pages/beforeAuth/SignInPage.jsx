import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import SsidChartIcon from '@mui/icons-material/SsidChart';
export default function SignInPage() {
   const navigate = useNavigate()
  return (
    <div className="login-bg">
      <div className="login-flow h-[488px] w-[464px] py-8 bg-[white] rounded  ">
      <div className="text-left-section text-center py-4">
        <p style={{lineHeight:"1"}} className='text-[28px]'>some<span className='text-[#FF6B6B]'>one</span><br />< SsidChartIcon sx={{color:"#FF6B6B"}}/>likeme </p>
        <br />
        <b className="text-2xl">Change your password</b>
        <p>A reset email will be sent to your email id</p>
      </div>
      <div className="back-tosign-btn text-center py-12 px-12">
           <Button variant='contained' fullWidth  sx={{padding:"10px",borderRadius:"83px",height:"56px",textTransform:"none",color:"#878787",backgroundColor:"#FF6B6B",color:"white"}} onClick={()=>navigate('/login')}>Sign In</Button>
        </div>
      </div>
    </div>
  );
}
