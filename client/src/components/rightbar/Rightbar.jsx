import "./rightbar.css";
import {Users} from "../../someData";
import Online from "../online/Online";


export default function Rightbar({user}) {
   const HomeRightbar = () => {
      const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      return (
         <>
            <div className="birthdayContainer">
               <img className="birthdayImg" src={`${PF}/gift.png`} alt=""/>
               <span className="birthdayText">
            <b>Alexandr Mironov</b> <b>and 2 other friends</b> have a birthday today.
          </span>
            </div>
            <img className="rightbarAd" src={`${PF}/ad.png`} alt=""/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
               {Users.map((u) => (
                  <Online key={u.id} user={u}/>
               ))}
            </ul>
         </>
      );
   };

   const PfrofileRightbar = () => {
      const PF = process.env.REACT_APP_PUBLIC_FOLDER;
      return (
         <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
               <div className="rightbarInfo__item">
                  <span className="rightbar_info_key">City:</span>
                  <span className="rightbar_info_value">{user.city}</span>
               </div>
               <div className="rightbarInfo__item">
                  <span className="rightbar_info_key">From:</span>
                  <span className="rightbar_info_value">{user.from}</span>
               </div>
               <div className="rightbarInfo__item">
                  <span className="rightbar_info_key">Relationship:</span>
                  <span className="rightbar_info_value">{user.relationship === 1
                     ? "Single" : user.relationship === 2
                        ? "Married" : "-"}</span>
               </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
               <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src={`${PF}person/person1.jpeg`} alt=""/>
                  <span className="rightbarFolliwingName">Anastasia Kozlova</span>
               </div>
               <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src={`${PF}person/person3.jpeg`} alt=""/>
                  <span className="rightbarFolliwingName">Anastasia Kozlova</span>
               </div>
               <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src={`${PF}person/person4.jpeg`} alt=""/>
                  <span className="rightbarFolliwingName">Anastasia Kozlova</span>
               </div>
               <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src={`${PF}person/person5.jpeg`} alt=""/>
                  <span className="rightbarFolliwingName">Anastasia Kozlova</span>
               </div>
               <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src={`${PF}person/person6.jpeg`} alt=""/>
                  <span className="rightbarFolliwingName">Anastasia Kozlova</span>
               </div>
               <div className="rightbarFollowing">
                  <img className="rightbarFollowingImg" src={`${PF}person/person7.jpeg`} alt=""/>
                  <span className="rightbarFolliwingName">Anastasia Kozlova</span>
               </div>
            </div>

         </>
      );
   };

   return (
      <div className="rightbar">
         <div className="rightBarWrapper">
            {user ? <PfrofileRightbar/> : <HomeRightbar/>}
         </div>
      </div>
   );
};
