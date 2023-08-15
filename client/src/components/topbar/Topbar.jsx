import "./topbar.css";
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../context/AuthContext";

export default function Topbar() {

   const {user} = useContext(AuthContext);
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   return (
      <div className="topbarContainer">
         <div className="topbarLeft">
            <Link to="/" style={{textDecoration: "none"}}>
               <span className="logo">Kickasocial</span>
            </Link>
         </div>
         <div className="topbarCenter">
            <div className="searchbar">
               <SearchIcon className="search"/>
               <input placeholder="Search for friend, post, video" type="text" className="searchInput"/>
            </div>
         </div>
         <div className="topbarRight">
            <div className="topbarLinks">
               <span className="topbarLink">Homepage</span>
               <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
               <div className="topbarIconItem">
                  <PersonIcon/>
                  <span className="topbarIconBadge">1</span>
               </div>
               <div className="topbarIconItem">
                  <ChatIcon/>
                  <span className="topbarIconBadge">3</span>
               </div>
               <div className="topbarIconItem">
                  <CircleNotificationsIcon/>
                  <span className="topbarIconBadge">1</span>
               </div>
            </div>
            <Link to={`/profile/${user.username}`}>
               <img src={user.profilePicture
                  ? PF + user.profilePicture
                  : PF + "person/noAvatar.jpeg"}
                    alt="" className="topbarImg"/>
            </Link>
         </div>
      </div>
   )
};


