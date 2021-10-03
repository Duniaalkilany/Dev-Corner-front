import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from "react";
import axios from 'axios';
// import { Posts } from "../../dummyData";
export default function Feed({ username }) {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
// console.log('feed rendered');
const fetchPosts = async () => {

    const res = username
    //timeline posts===> timeline user 
    ?await  axios.get("/posts/profile/" + username)
    //timeline posts===> timeline user  
    :await  axios.get("posts/timeline/165")
    // console.log(res);
    setPosts(res.data)

}
fetchPosts()
    },[username])

    return (
        <div className="feed">
           <div className="feedWrapper">
{/*create share component===> to share any thing in feed side  */}
            <Share />
{/*create post component===> for posts */} 

{posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
    
           </div>
        </div>
    )
}
