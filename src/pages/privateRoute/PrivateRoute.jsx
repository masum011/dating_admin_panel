// import React, { useEffect } from "react";
// import { Navigate, useNavigate } from "react-router-dom";

// const PrivateRoute = ({ Component }) => {
//   const navigate = useNavigate();
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         clearInterval(interval);
//         navigate("/login");
//       }
//     }, 1000)
//     return () => {
//       clearInterval(interval);
//     };
//   }, [navigate]);
//   const token = localStorage.getItem("token");

//   return token ? <Component /> : <Navigate to="/login" />;
// };
// export default PrivateRoute;

  const PrivateRoute = ({ Component }) => {
    return <Component />;
  };
  export default PrivateRoute;