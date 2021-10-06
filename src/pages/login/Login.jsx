
import './login.css';
import { useContext, useRef } from 'react';
import { loginCall } from '../../apiCalls';
import { AuthContext } from '../../context/AuthContext';
//for loading//material==>progress
import { CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Register from '../register/Register';

export default function Login() {
  //using useRef hook or use usestate
  const email = useRef();
  const password = useRef();
  //usecontex hook to use all values from AuthContext
  const { user, isFetching, dispatch, error } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    //  console.log('email',email.current.value) ;
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  //according to reducer ==>(null, payload===>sucess login),(null,null==>there is error)
  console.log(user);
  function handleLogout() {
    AuthContext.user(null);
  }
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Dev-Corner</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you on Dev-corner.
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Email'
              type='email'
              className='loginInput'
              required
              ref={email}
            />
            <input
              placeholder='Password'
              minLength='4'
              type='password'
              className='loginInput'
              required
              ref={password}
            />
            <button className='loginButton'>
              {''}
              {isFetching ? (
                <CircularProgress color='white' size='20px' />
              ) : (
                'Log In'
              )}
            </button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterButton'>
              {isFetching ? (
                <CircularProgress color='white' size='20px' />
              ) : (
                <Link
                  to={'./Register'}
                  color='white'
                  style={{ textDecoration: 'none' }}
                >
                  Create a New Account
                </Link>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}









// import "./login.css";

// import { useContext, useRef } from "react";
// import { loginCall } from "../../apiCalls";
// import { AuthContext } from "../../context/AuthContext";
// //for loading//material==>progress
// import { CircularProgress } from "@material-ui/core";
// export default function Login() {
// //using useRef hook or use usestate
//     const email = useRef();
//     const password = useRef()
//     //usecontex hook to use all values from AuthContext
//     const {user, isFetching, dispatch ,error} = useContext(AuthContext);
//   const handleClick = (e) => {
//     e.preventDefault();
//   //  console.log('email',email.current.value) ;
//   loginCall(
//     { email: email.current.value, password: password.current.value },
//     dispatch
//   );

//   };
//   //according to reducer ==>(null, payload===>sucess login),(null,null==>there is error)
//   console.log(user);
//   function handleLogout() {
    
    
//     AuthContext.user(null);
//   }
//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         <div className="loginLeft">
//           <h3 className="loginLogo">Dev-Corner</h3>
//           <span className="loginDesc">
//             Connect with friends and the world around you on Dev-corner.
//           </span>
//         </div>
//         <div className="loginRight">
//           <form className="loginBox" onSubmit={handleClick}>
//             <input placeholder="Email"  type="email" className="loginInput"  required ref={email} />
//             <input placeholder="Password" minLength="4" type="password" className="loginInput" required ref={password} />
//             <button className="loginButton" > {isFetching ? (
//                 <CircularProgress color="white" size="20px" />
//               ) : (
//                 "Log In"
//               )}</button>
//             <span className="loginForgot">Forgot Password?</span>
//             <button className="loginRegisterButton">
//             {isFetching ? (
//                 <CircularProgress color="white" size="20px" />
//               ) : (
//                 "Create a New Account"
//               )}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }