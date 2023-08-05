import { React, useState } from "react";
import logo from "../../assets/images/login/logo.png";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../beforeAuth/redux/loginSlice";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user, "usermanage");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: {  isValid, isDirty },
  } = useForm();
  const [rememberMe, setRememberMe] = useState(false);

  // console.log(rememberMe,"rememberme")
  // useEffect(() => {
  //   const rememberMeState = localStorage.getItem("rememberMe");
  //   if (rememberMeState !== null) {
  //     setRememberMe(rememberMeState === "true");
  //   }
  // }, []);

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const onSubmit = (data) => {
    const payload = { ...data, rememberMe };
    dispatch(userLogin(payload));

    if (rememberMe) {
      localStorage.setItem("rememberMe", rememberMe.toString());
    } else {
      localStorage.removeItem("rememberMe");
    }
    const pollToken = setInterval(() => {
      const token = localStorage.getItem("token");
      if (token) {
        clearInterval(pollToken);
        navigate("/");
      }
    }, 1000);
  };

  return (
    <>
      <div className="login-bg">
        <div className="login-flow h-[536px] w-[464px] py-8 bg-[white] rounded  ">
          <div className="text-left-section text-center">
            <img className="m-[auto] py-2" src={logo} alt="logo" />
            <p className="signin text-[28px] font-semibold py-4">Sign In</p>
          </div>
          <div className="login-input-filed pb-8 px-8">
            <form onSubmit={handleSubmit(onSubmit)}>
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
              <br />
              <br />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  max: 20,
                  min: 5,
                  maxLength: 98,
                })}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword}>
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <span className="text-[red]">{user.userError}</span>
              <div className="py-4 pb-6">
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                />
                <label>Remember me</label>
              </div>
              <Button
                className="sigin-btn"
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  padding: "10px",
                  borderRadius: "83px",
                  backgroundColor: "#FF6B6B",
                  height: "56px",
                  textTransform: "none",
                  // backgroundColor:"#FF6B6B !important"
                }}
                disabled={!isDirty || !isValid}
              >
                Sign In
                <span>{user.isLoading ? "loading...." : " "}</span>
              </Button>
              {/* <button disabled={!isDirty || !isValid}  className="w-[100%] bg-[#FF6B6B] p-4 text-white"style={{borderRadius:"83px"}}>sign In</button> */}
              <div className="text-center py-8">
                <p className="text-[#8C8C8C]">
                  Forgot your password?{" "}
                  <span className="text-[#FF6B6B]">
                    <Link to="/forget-password">Forget Password</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
