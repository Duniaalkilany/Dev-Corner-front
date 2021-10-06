import axios from "axios";
import { useEffect, useState } from "react";
import "./conversation.css";

export default function Conversation({ conversation , currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m != currentUser.id);
    console.log('currentUser.id=====>',currentUser.id);
console.log('friendId=========>',friendId);
    const getUser = async () => {
      try {
        const res = await axios("https://dev-corner-back.herokuapp.com/api/users?userId=" + friendId);
        console.log(res);
        setUser(res.data);
      } catch (err) {
        console.log(err);
        
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
            user?.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
          }
          
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}
