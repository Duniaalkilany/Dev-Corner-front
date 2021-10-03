import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import axios from "axios";
import { useEffect, useState } from "react";
//hook clled use params use it to get ====> username params from URL
import { useParams } from "react-router";
export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user, setUser] = useState({});
    const username = useParams().username
    console.log("params.username======>",username);

    useEffect(() => {
        const fetchUser = async () => {
            //get a user route by ==> username
          const res = await axios.get(`/users?username=${username}`);
          setUser(res.data);
        };
        fetchUser();
      }, [username]);
    return (
        <>
        <Topbar />
        <div className="profile">
          {/* <Sidebar /> */}
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  className="profileCoverImg"
                //   src={`${PF}post/3 (1).jpeg`}
                src={user.coverPicture || PF + "person/nocover-picture.png"}
                  alt=""
                  
                />
                <img
                  className="profileUserImg"
                //   src={`${PF}person/dunia.png`}
                src={user.profilePicture || PF + "person/noprof-pic.png"}
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
