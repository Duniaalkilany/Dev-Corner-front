import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
//hook clled use params use it to get ====> username params from URL
import { useParams } from "react-router";
import { Button } from "@material-ui/core";
export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({});
    const username = useParams().username
    console.log("params.username======>",username);
    const { user: currentUser, dispatch } = useContext(AuthContext);
    useEffect(() => {
      const fetchUser = async () => {
          //get a user route by ==> username
        const res = await axios.get(`https://dev-corner-back.herokuapp.com/api/users?username=${username}`);
        setUser(res.data);
      };
      fetchUser();
    }, []);
    
    useEffect(() => {
        const fetchUser = async () => {
            //get a user route by ==> username
          const res = await axios.get(`https://dev-corner-back.herokuapp.com/api/users?username=${username}`);
          setUser(res.data);
        };
        fetchUser();
      }, [username]);

      console.log('user=============',user);
/**============================================================================== */


      /**============================================================================ */

    return (
        <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
             
                <img
                  className="profileCoverImg"
               
                  src={
                    user.coverPicture
                      ? PF + user.coverPicture
                      : PF + "person/nocover-picture.png"
                     
                  }
                  alt=""
                  
                />
                <img
                  className="profileUserImg"
               
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                />
              </div>
              <div className="profileInfo">
                  <h4 className="profileInfoName">{user.username}</h4>
                  <span className="profileInfoDesc">{user.desc || "hellllllllllllllllo"}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              {/* <Feed username="dunia"/> */}
              <Feed username={username} />
    {/*pass profile as props to indicate the rightbar for profile not homebage*/}
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </>
    );

}
