import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SsidChartIcon from '@mui/icons-material/SsidChart';
import { Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { adminUpdatePass } from './redux/loginSlice';
export default function () {

    const dispatch=useDispatch()
    const navigate= useNavigate()
    const user = useSelector((state) => state.user);
    // const { register, errors, handleSubmit, watch } = useForm({});
    const { register,watch, handleSubmit, formState: { errors,isValid,isDirty } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = async data => {
      const password=data.password;
      const payload={
          email:"adityag@gmail.com",
          secretId:'64be1b0a745c98dc877ee0cb',
          password:password,
      }
      dispatch(adminUpdatePass(payload))
      navigate("/sign-in-page")
    };
  return (
    <>
        <div className="login-bg">
        <div className="login-flow h-[488px] w-[464px] py-8 bg-[white] rounded  ">
          <div className="text-center">

        <p style={{lineHeight:"1"}} className='text-[28px]'>some<span className='text-[#FF6B6B]'>one</span><br />< SsidChartIcon sx={{color:"#FF6B6B"}}/>likeme </p>
          <div className="py-4">

          <h2 className='text-3xl'>Change your password</h2>
          <p className=''>A reset email will be sent to your email id</p>
          </div>
          </div>
        <form onSubmit={e => e.preventDefault()}>
      <TextField
        type="password"
        sx={{padding:"1rem"}}
        fullWidth
        placeholder='Password'
        {...register('password',{
          required: "You must specify a password",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        })}
      />
      {console.log(errors,"checkingnnnnn")}
      {/* { && <p>{errors.password.message}</p>} */}
      <TextField
        fullWidth
        type="password"
        sx={{padding:"1rem"}}
        placeholder='Re-type password'
        {...register('password_repeat',{
          validate: value =>
            value === password.current || "The passwords do not match"
        })}
      />

      {/* {errors.password_repeat && <p>{errors.password_repeat.message}</p>} */}

      {/* <input type="submit"  /> */}
         <div className="forget-pass p-8 px-16">
        <Button variant="contained" type="submit" onClick={handleSubmit(onSubmit)} disabled={!isDirty || !isValid}  fullWidth className=" sigin-btn" sx={{padding:"10px",borderRadius:"83px",backgroundColor:"#FF6B6B",height:"56px",textTransform:"none"}} >Request new password</Button>
         </div>
    </form>
         </div>
         </div>
    </>
  )
}
