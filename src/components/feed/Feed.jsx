import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";
export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);

    const { user } = useContext(AuthContext);
    useEffect(() => {
// console.log('feed rendered');
const fetchPosts = async () => {

    const res = username
    //timeline posts===> timeline user 
    ?await  axios.get("https://dev-corner-back.herokuapp.com/api/posts/profile/" + username)
    //timeline posts===> timeline user  
    :await  axios.get("https://dev-corner-back.herokuapp.com/api/posts/timeline/"+ user.id)
    // console.log(res);
    setPosts(res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      }))

}
fetchPosts()
    },[username ,user.id])

    return (
        <div className="feed">
           <div className="feedWrapper">
{/*create share component===> to share any thing in feed side  */}

{(!username || username === user.username) && <Share />}
           
{/*create post component===> for posts */} 

{posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
    
           </div>
        </div>
    )
}
