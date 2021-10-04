import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Add, Remove } from '@material-ui/icons';
import {
  DialogTitle,
  Dialog,
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
} from '@mui/material';

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [open, setOpen] = useState(false);
  const [userCity, setUserCity] = useState(user.city);
  const [userFrom, setUserFrom] = useState(user.from);
  const [userRelationship, setUserRelationship] = useState(user.relationship);

  const { user: currentUser, dispatch } = useContext(AuthContext);

  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get('/users/friends/' + user.id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user.id}/unfollow`, {
          userId: currentUser.id,
        });
        dispatch({ type: 'UNFOLLOW', payload: user.id });
      } else {
        await axios.put(`/users/${user.id}/follow`, {
          userId: currentUser.id,
        });
        dispatch({ type: 'FOLLOW', payload: user.id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className='birthdayContainer'>
          {/* <img className="birthdayImg" src="assets/gift.png" alt="" /> */}
          <span className='birthdayText'>
            {/* <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today. */}
          </span>
        </div>
        {/* <img className="rightbarAd" src="assets/ad.png" alt="" /> */}
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const SimpleDialog = (props) => {
    const { onClose, selectedValue, open } = props;

    const handleCity = (e) => {
      e.preventDefault();
      setUserCity(e.target.value);
    };
    const handleFrom = (e) => {
      e.preventDefault();
      setUserFrom(e.target.value);
    };
    const handleRelationship = (e) => {
      e.preventDefault();
      setUserRelationship(e.target.value);
      console.log('asfdasf');
    };

    const updateInfo = (e) => {
      e.preventDefault();

      axios
        .put(`/users/${currentUser.id}`, {
          userId: currentUser.id,
          city: userCity,
          from: userFrom,
          relationship: userRelationship,
        })
        .then(function (response) {
          window.location.reload(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    const handleClose = () => {
      onClose(selectedValue);
    };

    return (
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Update user info</DialogTitle>
        <FormControl>
          <TextField
            value={userCity}
            onChange={handleCity}
            id='city'
            label='City'
            variant='outlined'
          />
          <TextField
            value={userFrom}
            onChange={handleFrom}
            id='from'
            label='From'
            variant='outlined'
          />
          <Select
            id='relationship'
            value={userRelationship}
            label='Relationship'
            onChange={handleRelationship}
          >
            <MenuItem value='1'>Single</MenuItem>
            <MenuItem value='2'>Married</MenuItem>
            <MenuItem value='3'>Other</MenuItem>
          </Select>
          <Button type='submit' onClick={updateInfo}>
            Update
          </Button>
        </FormControl>
      </Dialog>
    );
  };

  const ProfileRightbar = () => {
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = (value) => {
      setOpen(false);
    };

    return (
      <>
        {user.username !== currentUser.username && (
          <button className='rightbarFollowButton' onClick={handleClick}>
            {followed ? 'Unfollow' : 'Follow'}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
        <h4 className='rightbarTitle' onClick={handleClickOpen}>
          User information
        </h4>
        <SimpleDialog
          selectedValue={'selectedValue'}
          open={open}
          onClose={handleClose}
        />
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City:</span>
            <span className='rightbarInfoValue'>{user.city}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From:</span>
            <span className='rightbarInfoValue'>{user.from}</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship:</span>
            <span className='rightbarInfoValue'>
              {user.relationship === '1'
                ? 'Single'
                : user.relationship === '2'
                ? 'Married'
                : '-'}
            </span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User friends</h4>
        <div className='rightbarFollowings'>
          {friends.map((friend) => (
            <Link
              to={'/profile/' + friend.username}
              style={{ textDecoration: 'none' }}
            >
              <div className='rightbarFollowing'>
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + 'person/noAvatar.png'
                  }
                  alt=''
                  className='rightbarFollowingImg'
                />
                <span className='rightbarFollowingName'>{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

// import "./rightbar.css";
// import { Users } from "../../dummyData";
// import Online from "../online/Online";
// import {useContext,useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { Add, Remove } from "@material-ui/icons";
// export default function Rightbar({ user }) {
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER
//   const [friends, setFriends] = useState([]);
//   const { user: currentUser, dispatch } = useContext(AuthContext);

//   const [followed, setFollowed] = useState(
//     currentUser.followings.includes(user?.id)
//   );
//   useEffect(() => {
//     const getFriends = async () => {
//       try {
//         const friendList = await axios.get("/users/friends/" + user.id);
//         setFriends(friendList.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     getFriends();
//   }, [user]);

// //for following
//   const handleClick = async () => {
//     try {
//       if (followed) {
//         await axios.put(`/api/users/${user.id}/unfollow`, {
//           userId: currentUser.id,
//         });
//         dispatch({ type: "UNFOLLOW", payload: user.id });
//       } else {
//         await axios.put(`/api/users/${user.id}/follow`, {
//           userId: currentUser.id,
//         });
//         dispatch({ type: "FOLLOW", payload: user.id });
//       }
//       setFollowed(!followed);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const HomeRightbar = () => {
//     //rightbar for home bage
//     return (
//       <>
//         <div className="birthdayContainer">
//           <img className="birthdayImg" src="assets/gift.png" alt="" />
//           <span className="birthdayText">
//             <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
//           </span>
//         </div>
//         <img className="rightbarAd" src="assets/ad.png" alt="" />
//         <h4 className="rightbarTitle">Online Friends</h4>
//         <ul className="rightbarFriendList">
//           {Users.map((u) => (
//             <Online key={u.id} user={u} />
//           ))}
//         </ul>
//       </>
//     );
//   };

//   const ProfileRightbar = () => {
//     //rightbar for profile page
//     return (
//       <>
//       {/*for foolow and unfollow */}
//        {user.username !== currentUser.username && (
//           <button className="rightbarFollowButton" onClick={handleClick}>
//             {followed ? "Unfollow" : "Follow"}
//             {followed ? <Remove /> : <Add />}
//           </button>
//         )}
//         <h4 className="rightbarTitle">User information</h4>
//         <div className="rightbarInfo">
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">City:</span>
//             <span className="rightbarInfoValue">{user.city}</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">From:</span>
//             <span className="rightbarInfoValue">{user.from}</span>
//           </div>
//           <div className="rightbarInfoItem">
//             <span className="rightbarInfoKey">Relationship:</span>
//             <span className="rightbarInfoValue">
//       {user.relationship === "1"
//               ? "Single"
//               : user.relationship === "2"
//               ? "Married"
//               : "-"}
//                </span>
//           </div>
//         </div>
//         <h4 className="rightbarTitle">User friends</h4>
//         <div className="rightbarFollowings">
//         {friends.map((friend) => (
//             <Link
//               to={"/profile/" + friend.username}
//               style={{ textDecoration: "none" }}
//             >
//           <div className="rightbarFollowing">
//           <img
//                   src={
//                     friend.profilePicture
//                       ? PF + friend.profilePicture
//                       : PF + "person/noAvatar.png"

//                   }
//                   alt=""
//                   className="rightbarFollowingImg"
//                 />
//                 <span className="rightbarFollowingName">{friend.username}</span>
//           </div>

//           </Link>
//           ))}

//         </div>
//       </>
//     );
//   };
//   return (
//     <div className="rightbar">
//       <div className="rightbarWrapper">
//         {user? <ProfileRightbar /> : <HomeRightbar />}
//       </div>
//     </div>
//   );
// }
