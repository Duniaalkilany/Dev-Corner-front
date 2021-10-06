import './sidebar.css'
import {RssFeed, Chat, PlayCircleFilledOutlined,Group,Bookmark,HelpOutline,WorkOutline,Event,School,} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
export default function Sidebar() {
    return (
        <div className='sidebar'>
           <div className="sidebarWrapper">

               <ul className="sidebarList">

               <li className="sidebarListItem">
               {/* <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span> */}

    <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
               </li>
               <li className="sidebarListItem">

               <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
               {/* <Chat className="sidebarIcon" />
               <span className="sidebarListItemText">Chats</span> */}
               </li>
              <li className="sidebarListItem">
              <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
              {/* <PlayCircleFilledOutlined className="sidebarIcon" />
             <span className="sidebarListItemText">Videos</span> */}
             </li>
          <li className="sidebarListItem">
            {/* <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span> */}
             <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
          </li>
          <li className="sidebarListItem">
            {/* <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span> */}
             <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
          </li>
          <li className="sidebarListItem">
            {/* <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span> */}
             <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
          </li>
          <li className="sidebarListItem">
            {/* <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span> */}
             <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
          </li>
          <li className="sidebarListItem">
            {/* <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span> */}
             <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
          </li>
          <li className="sidebarListItem">
            {/* <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span> */}
             <img className="rightbarAd"src="https://i.pinimg.com/originals/18/e0/64/18e0641748101b3f7275f5723d4405f0.gif" alt="" />
          </li>

               </ul>


        {/* <button className="sidebarButton">Show More</button> */}
        <hr className="sidebarHr" />
       
         <ul className="sidebarFriendList">
         <h4 className='rightbarTitle'>Admins</h4>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul> 
           </div>

        </div>
    )
}
