
import './topbar.css';
import { Search, Person, Chat, Notifications} from '@material-ui/icons';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button } from '@material-ui/core';
import Login from '../../pages/login/Login';

export default function Topbar() {
  const { user, dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const logoutHandler = async () => {
    try {
      if (user) {
        dispatch({ type: 'LOGOUT' });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
        {/*adding link to home bage */}
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Dev-Corner</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='searchbar'>
          <Search className='searchIcon' />
          <input
            placeholder='Search for friend, post or video'
            className='searchInput'
          />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarLinks'>
          {/* <span className='topbarLink'>Homepage</span> */}
          {/* <span className="topbarLink">Timeline</span> */}
          <Button variant='contained' color='light' onClick={logoutHandler}>
            Logout
          </Button>
        </div>
        <div className='topbarIcons'>
        <div className='topbarIconItem'>
          <Link to='/'  style={{ textDecoration: 'none' ,color:'white'}} >
          <HomeIcon />
        </Link>
           
          </div>


         {/****************************************************************** */} 
          <div className='topbarIconItem'>
            <Person />
            <span className='topbarIconBadge'>1</span>
          </div>
          <div className='topbarIconItem'>
          <Link to='/messenger'  style={{ textDecoration: 'none' ,color:'white'}} >
          <Chat />
        </Link>
           
            <span className='topbarIconBadge'>2</span>
          </div>
          <div className='topbarIconItem'>
            <Notifications />
            <span className='topbarIconBadge'>1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noprof-pic.png'
            }
            alt=''
            className='topbarImg'
          />
        </Link>
      </div>
    </div>
  );
}






// import "./topbar.css";
// import { Search, Person, Chat, Notifications } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { Button } from "@material-ui/core";

// export default function Topbar() {
//   const { user,dispatch } = useContext(AuthContext);
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  
//   const logoutHandler = async () => {
//     try {
//       if (user) {
    
//         dispatch({ type: "LOGIN_START" });
//       } 
//     } catch (err) {
//     }
//   };
//   return (
//     <div className="topbarContainer">
//       <div className="topbarLeft">
// {/*adding link to home bage */}
//       <Link to="/" style={{ textDecoration: "none" }}>
//         <span className="logo">Dev-Corner</span>
//           </Link>

//     {/*if there is user go==>home , no user===>register */}
//     {/* <span className="logo">Dev-Corner</span> */}
     
//       </div>
//       <div className="topbarCenter">
//         <div className="searchbar">
//           <Search className="searchIcon" />
//           <input
//             placeholder="Search for friend, post or video"
//             className="searchInput"
//           />
//         </div>
//       </div>
//       <div className="topbarRight">
//         <div className="topbarLinks">
//           <span className="topbarLink">Homepage</span>
//           {/* <span className="topbarLink">Timeline</span> */}
//           <Button variant="contained" color="light" onClick={logoutHandler} >
//  Logout
// </Button>
//         </div>
//         <div className="topbarIcons">
//           <div className="topbarIconItem">
//             <Person />
//             <span className="topbarIconBadge">1</span>
//           </div>
//           <div className="topbarIconItem">
//             <Chat />
//             <span className="topbarIconBadge">2</span>
//           </div>
//           <div className="topbarIconItem">
//             <Notifications />
//             <span className="topbarIconBadge">1</span>
//           </div>
//         </div>
//         <Link to={`/profile/${user.username}`}>
//         <img
//             src={
//               user.profilePicture
//                 ? PF + user.profilePicture
//                 : 
//                 PF + "person/noprof-pic.png"
//             }
//             alt=""
//             className="topbarImg"
//           />
//         </Link>
//       </div>
//     </div>
//   );
// }