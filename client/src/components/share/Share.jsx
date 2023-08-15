import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {useContext, useRef, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


export default function Share() {
   const {user} = useContext(AuthContext);
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   const desc = useRef();
   const [file, setFile] = useState(null);

   const submitHandler = async (e) => {
      e.preventDefault()
      const newPost = {
         userId: user._id,
         desc: desc.current.value
      }
      if (file) {
         const data = new FormData();
         const fileName = Date.now() + file.name;
         data.append("file", file)
         data.append("name", fileName);
         newPost.img = fileName;
         try {
            await axios.post("/upload", data);
         } catch (err) {
            console.log(err)
         }
      }
      try {
         await axios.post("/posts", newPost)
         window.location.reload()
      } catch (err) {

      }

   }

   return (
      <div className="share">
         <div className="shareWrapper">
            <div className="shareTop">
               <img className="shareProfileImg"
                    src={user.profilePicture
                       ? PF + user.profilePicture
                       : PF + "person/noAvatar.jpeg"}
                    alt=""/>
               <input className="shareInput"
                      placeholder={"What's in your mind " + user.username + "?"}
                      ref={desc}/>
            </div>
            <hr className="sharHr"/>
            <form className="shareBottom" onSubmit={submitHandler}>
               <div className="shareOptions">
                  <label htmlFor="file" className="shareOption">
                     <PermMediaIcon htmlColor="#7B68EE" className="shareIcon"/>
                     <span className="shareOptionText">Photo / Video</span>
                     <input style={{display: "none"}}
                            type="file" id="file"
                            accept=".png,.jpeg,.jpg"
                            onChange={(e) => setFile(e.target.files[0])}/>

                  </label>
                  <div className="shareOption">
                     <LabelImportantIcon htmlColor="#1E90FF" className="shareIcon"/>
                     <span className="shareOptionText">Tag</span>
                  </div>
                  <div className="shareOption">
                     <LocationOnIcon htmlColor="#7B68EE" className="shareIcon"/>
                     <span className="shareOptionText">Location</span>
                  </div>
                  <div className="shareOption">
                     <EmojiEmotionsIcon htmlColor="#1E90FF" className="shareIcon"/>
                     <span className="shareOptionText">Feelings</span>
                  </div>
               </div>
               <button className="shareBtn"
                       type="submit">Share
               </button>
            </form>
         </div>
      </div>
   )
}
