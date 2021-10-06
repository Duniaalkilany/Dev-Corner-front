



import './register.css';
import axios from 'axios';
import { useRef } from 'react';
//using hook called useHistory
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import Login from '../login/Login';

export default function Register() {
  //after register i want user to login also so i can change the user
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity('hooola');
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post('/auth/register', user);
        history.push('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Dev-Corner</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you Dev-Corner.
          </span>
        </div>
        <div className='loginRight'>
          <form className='loginBox' onSubmit={handleClick}>
            <input
              placeholder='Username'
              required
              ref={username}
              className='loginInput'
            />
            <input
              placeholder='Email'
              required
              ref={email}
              className='loginInput'
              type='email'
            />
            <input
              placeholder='Password'
              required
              ref={password}
              className='loginInput'
              type='password'
              minLength='4'
            />
            <input
              placeholder='Password Again'
              required
              ref={passwordAgain}
              className='loginInput'
              type='password'
            />
            <button className='loginButton' type='submit'>
              Sign Up
            </button>

            <button className='loginRegisterButton'>
              <Link
                to={'./Login'}
                color='white'
                style={{ textDecoration: 'none' }}
              >
                Log into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}






// import "./register.css";
// import axios from "axios";
// import { useRef } from "react";
// //using hook called useHistory
// import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
// import Login from '../login/Login'

// export default function Register() {
//   //after register i want user to login also so i can change the user 
//   const username = useRef();
//   const email = useRef();
//   const password = useRef();
//   const passwordAgain = useRef();
//   const history = useHistory();

//   const handleClick = async (e) => {
//     e.preventDefault();
//     if (passwordAgain.current.value !== password.current.value) {
//       passwordAgain.current.setCustomValidity("hooola");
//     } else {
//       const user = {
//         username: username.current.value,
//         email: email.current.value,
//         password: password.current.value,
//       };
//       try {
//         await axios.post("/auth/register", user);
//         history.push("/login");
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };

//   return (
//     <div className="login">
//       <div className="loginWrapper">
//         <div className="loginLeft">
//           <h3 className="loginLogo">Dev-Corner</h3>
//           <span className="loginDesc">
//             Connect with friends and the world around you Dev-Corner.
//           </span>
//         </div>
//         <div className="loginRight">
//         <form className="loginBox" onSubmit={handleClick}>
//             <input   
//             placeholder="Username"
//               required
//               ref={username}
//               className="loginInput"/>
//             <input  
//             placeholder="Email"
//               required
//               ref={email}
//               className="loginInput"
//               type="email"/>
//             <input  placeholder="Password"
//               required
//               ref={password}
//               className="loginInput"
//               type="password"
//               minLength="4" />
//             <input   
//             placeholder="Password Again"
//               required
//               ref={passwordAgain}
//               className="loginInput"
//               type="password"/>
//             <button className="loginButton" type="submit">Sign Up</button>
            
//             <button className="loginRegisterButton"  >
//               Log into Account
//             </button>
           
//             </form>
//         </div>
//       </div>
//     </div>
//   );
// }