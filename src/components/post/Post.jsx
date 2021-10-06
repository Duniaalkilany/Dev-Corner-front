
import './post.css';
// import { MoreVert } from '@material-ui/icons';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const options = ['delete'];

export default function Post({ post }) {
  //using set satte for likes functionality
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser.id));
  }, [currentUser.id, post.likes]);

  useEffect(() => {
    // console.log('feed rendered');
    const fetchUser = async () => {
      //get a user posts route by
      const res = await axios.get(`https://dev-corner-back.herokuapp.com/api/users?userId=${post.userId}`);
      console.log(res);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put('https://dev-corner-back.herokuapp.com/api/posts/' + post.id + '/like', { userId: currentUser.id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const deleteHandler = () => {
    try {
      axios({
        method: 'delete',
        url: 'https://dev-corner-back.herokuapp.com/api/posts/' + post.id,
        data: {
          userId: currentUser.id,
        },
      });
      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };
console.log("useeeeeeeeeeeeer",user);
console.log(`/profile/${user.username}`);
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`/profile/${user.username}`}>
              <img
                className='postProfileImg'
                //profile pics on posts===>picture to who post !//from users arry
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + 'person/noAvatar.png'
                }
                alt=''
              />
            </Link>
            <span className='postUsername'>
              {/*//username for each post //from user array*/}
              {user.username}
            </span>
            <span className='postDate'>{format(post.createdAt)}</span>
          </div>
          <div className='postTopRight'>
            {/* <MoreVert /> */}
            {/* <MenuItem key='delete' selected='delete' onClick={deleteHandler}>
              Delete
            </MenuItem> */}
            <MenuItem key='delete'  onClick={deleteHandler}>
              Delete
            </MenuItem>
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={PF + post.img} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img
              className='likeIcon'
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=''
            />
            <img
              className='likeIcon'
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=''
            />
            <span className='postLikeCounter'>{like} people like it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}





// import './post.css'
// import { MoreVert } from "@material-ui/icons";
// import {useContext ,useEffect, useState } from "react";
// import axios from "axios";
// import { format } from "timeago.js";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import MenuItem from '@mui/material/MenuItem';
// export default function Post({ post }) {
//   //using set satte for likes functionality
//   const [like,setLike] = useState(post.likes.length)
//   const [isLiked,setIsLiked] = useState(false)
//   const [user, setUser] = useState({});
//   const PF = process.env.REACT_APP_PUBLIC_FOLDER
//   const { user: currentUser } = useContext(AuthContext);


//   useEffect(() => {
//     setIsLiked(post.likes.includes(currentUser.id));
//   }, [currentUser.id, post.likes]);

//   useEffect(() => {
//     // console.log('feed rendered');
//     const fetchUser = async () => {
//      //get a user posts route by
//         const res =await  axios.get(`/users?userId=${post.userId}`)
//         console.log(res);
//         setUser(res.data)
    
//     }
//     fetchUser ()
//         },[post.userId])

//   const likeHandler =()=>{
//     try {
//       axios.put("/posts" + post.id + "/like", { userId: currentUser.id });
//     } catch (err) {}
//     setLike(isLiked ? like - 1 : like + 1);
//     setIsLiked(!isLiked);
//   }

//   const deleteHandler = () => {
//     try {
//       axios({
//         method: 'delete',
//         url: '/posts/' + post.id,
//         data: {
//           userId: currentUser.id,
//         },
//       });
//       window.location.reload(false);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//     return (
//         <div className="post">
//          <div className="postWrapper">
//          <div className="postTop">
//          <div className="postTopLeft">
//          <Link to={`/profile/${user.username}`}>
//             <img
//               className="postProfileImg"
//               //profile pics on posts===>picture to who post !//from users arry
//               src={user.profilePicture ?PF +user.profilePicture :PF+ "person/noAvatar.png"}
//               alt=""
//             />
//             </Link>
//             <span className="postUsername"> 
//             {/*//username for each post //from user array*/ }    
//             {user.username}
//             </span>
//             <span className="postDate">{format(post.createdAt)}</span>
//           </div>
//           <div className="postTopRight">
//             {/* <MoreVert /> */}
//             <MenuItem key='delete' selected='delete' onClick={deleteHandler}>
//               Delete
//             </MenuItem>
//           </div>


//          </div>
//          <div className="postCenter">

//          <span className="postText">{post?.desc}</span>
//           <img className="postImg" src={PF + post.img} alt="" />
//          </div>
//          <div className="postBottom">

//          <div className="postBottomLeft">
//             <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
//             <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
//             <span className="postLikeCounter">{like} people like it</span>
//           </div>
//           <div className="postBottomRight">
//             <span className="postCommentText">{post.comment} comments</span>
//           </div>

//          </div>


//          </div>
//         </div>
//     )
// }
