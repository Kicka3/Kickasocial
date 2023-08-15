import "./post.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {format} from "timeago.js";
import {AuthContext} from "../../context/AuthContext";


export default function Post({post}) {
   const [like, setLike] = useState(post.likes.length);
   const [isliked, setIsLiked] = useState(false);
   const [user, setUser] = useState({});
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   const {user: currentUser} = useContext(AuthContext);


   useEffect(() => {
      setIsLiked(post.likes.includes(currentUser._id))
   }, [currentUser._id, post.likes]);


   useEffect(() => {
      const fetchUser = async () => {
         const res = await axios.get(`/users?userId=${post.userId}`);
         setUser(res.data)
      };
      fetchUser();
   }, [post.userId]);


   const likeHandler = () => {
      try {
         axios.put("/posts/" + post._id + "/like", {userId: currentUser._id})
      } catch (err) {

      }
      setLike(isliked ? like - 1 : like + 1)
      setIsLiked(!isliked)
   }
   return (
      <div className="post">
         <div className="postWrapper">
            <div className="postTop">
               <div className="postTopLeft">
                  <Link to={`profile/${user.username}`}>
                     <img className="postProfileImg"
                          src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.jpeg"}
                          alt="ProfilePucture"/>
                  </Link>
                  <span className="postUse
                  rName">{user.username}</span>
                  //Исправить баг с библиотекой timeago.js
                  {/*<span className="postDate">{format(post.createdAt)}</span>*/}
               </div>
               <div className="postTopRight">
                  <MoreVertIcon className=""/>
               </div>
            </div>
            <div className="postCenter">
               <span className="postText">{post?.desc}</span>
               <img className="postImg" src={PF + post.img} alt="postThree"/>
            </div>
            <div className="postBottom">
               <div className="postBottomLeft">
                  <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="heartImg"/>
                  <img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="LikeImg"/>
                  <span className="postLikeCounter">{like} people like it</span>
               </div>
               <div className="postBottomRight">
                  <span className="postCommentText">{post.comment} comments</span>
               </div>
            </div>
         </div>
      </div>
   )
};
