// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'
// import { isLoggedIn } from '../Authentication/auth';


// const PrivateRoute = () => {


//   let loggedIn = isLoggedIn();
//   if (loggedIn) {


//     console.log(isLoggedIn.data)

//     return <Outlet></Outlet>

//   }
//   else {
//     return <Navigate to={"/login"}></Navigate>;
//   }
// }
// export default PrivateRoute
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isLoggedIn } from '../Authentication/auth'; // Assuming this checks if the user is logged in

const PrivateRoute = () => {
  let loggedIn = isLoggedIn(); // Check if the user is logged in

  // If logged in, render the nested route via <Outlet />
  if (loggedIn) {
    return <Outlet />;
  } else {
    // If not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;