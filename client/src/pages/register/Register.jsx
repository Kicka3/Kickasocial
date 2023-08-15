import './register.css'
// import {Link, useNavigate} from "react-router-dom";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {useRef} from "react";
import axios from "axios";

export default function Register() {
   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
   const username = useRef();
   const email = useRef();
   const password = useRef();
   const passwordAgain = useRef();
   const history = useHistory();
   const handleClick = async (e) => {
      e.preventDefault();
      if (passwordAgain.current.value !== password.current.value) {
         passwordAgain.current.setCustomValidity("Password don't match")
      } else {
         const user = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
         }
         try {
            await axios.post("/auth/register", user);
            history.push("/login");

         } catch (err) {
            console.log(err + " " + "Не отправилось на сервер")
         }
      }
   };


   return (
      <div className='loginWrapper'>
         <div className="container">
            <input type="checkbox" id="flip"/>
            <div className="cover">
               <div className="front">
                  <img src={`${PF}posts/post5.jpeg`} alt=""/>
                  <div className="text">
                     <span className="text-1">Сonnect with your <br/>friends</span>
                     <span className="text-2">and discuss a cat's meme<br/> <b>on Kickasocial</b></span>
                  </div>
               </div>
               <div className="back">
                  {/*<img className="backImg" src="images/backImg.jpg" alt="" />*/}
                  <div className="text">
                     <span className="text-1">Complete miles of journey <br/> with one step</span>
                     <span className="text-2">Let's get started</span>
                  </div>
               </div>
            </div>
            <div className="forms">
               <div className="form-content">
                  <div className="login-form">
                     <div className="title">Signup</div>
                     <form onSubmit={handleClick}>
                        <div className="input-boxes">
                           <div className="input-box">
                              <i className="fas fa-user"></i>
                              <input
                                 type="text"
                                 required
                                 ref={username}
                                 placeholder="Enter your name"/>
                           </div>
                           <div className="input-box">
                              <i className="fas fa-envelope"></i>
                              <input
                                 type="email"
                                 required
                                 ref={email}
                                 placeholder="Enter your email"/>
                           </div>
                           <div className="input-box">
                              <i className="fas fa-lock"></i>
                              <input
                                 type="password"
                                 required
                                 ref={password}
                                 placeholder="Enter your password"
                                 minLength="5"
                              />
                           </div>
                           <div className="input-box">
                              <i className="fas fa-lock"></i>
                              <input type="password"
                                     required
                                     ref={passwordAgain}
                                     placeholder="Enter your password again"
                              />
                           </div>
                           <div className="button input-box">
                              <input type="submit" value="Sumbit"/>
                           </div>
                           <div className="text sign-up-text">Already have an account?
                              <label>
                                 <Link to="/login" style={{textDecoration: "none"}}> Login now</Link>
                              </label>
                           </div>
                        </div>
                     </form>
                  </div>


                  {/*<div className="signup-form">*/}
                  {/*   <div className="title">Signup</div>*/}
                  {/*   <form action="#">*/}
                  {/*      <div className="input-boxes">*/}
                  {/*         <div className="input-box">*/}
                  {/*            <i className="fas fa-user"></i>*/}
                  {/*            <input type="text" placeholder="Enter your name" required />*/}
                  {/*         </div>*/}
                  {/*         <div className="input-box">*/}
                  {/*            <i className="fas fa-envelope"></i>*/}
                  {/*            <input type="text" placeholder="Enter your email" required />*/}
                  {/*         </div>*/}
                  {/*         <div className="input-box">*/}
                  {/*            <i className="fas fa-lock"></i>*/}
                  {/*            <input type="password" placeholder="Enter your password" required />*/}
                  {/*         </div>*/}
                  {/*         <div className="button input-box">*/}
                  {/*            <input type="submit" value="Sumbit" />*/}
                  {/*         </div>*/}
                  {/*         <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>*/}
                  {/*      </div>*/}
                  {/*   </form>*/}
                  {/*</div>*/}


               </div>
            </div>
         </div>
      </div>













      // <div className='loginWrapper'>
      //    <div className="container">
      //       <input type="checkbox" id="flip" />
      //       <div className="cover">
      //          <div className="front">
      //             <img src="assets/posts/post5.jpeg" alt="" />
      //             <div className="text">
      //                <span className="text-1">Сonnect with your <br />friends</span>
      //                <span className="text-2">and discuss a cat's meme<br /> <b>on Kickasocial</b></span>
      //             </div>
      //          </div>
      //          <div className="back">
      //             <img className="backImg" src="images/backImg.jpg" alt="" />
      //             <div className="text">
      //                <span className="text-1">Complete miles of journey <br /> with one step</span>
      //                <span className="text-2">Let's get started</span>
      //             </div>
      //          </div>
      //       </div>
      //       <div className="forms">
      //          <div className="form-content">
      //             <div className="login-form">
      //                <div className="title">Login</div>
      //                <form action="#">
      //                   <div className="input-boxes">
      //                      <div className="input-box">
      //                         <i className="fas fa-envelope"></i>
      //                         <input type="text" placeholder="Enter your email" required />
      //                      </div>
      //                      <div className="input-box">
      //                         <i className="fas fa-lock"></i>
      //                         <input type="password" placeholder="Enter your password" required />
      //                      </div>
      //                      <div className="text"><a href="#">Forgot password?</a></div>
      //                      <div className="button input-box">
      //                         <input type="submit" value="Sumbit" />
      //                      </div>
      //                      <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now</label></div>
      //                   </div>
      //                </form>
      //             </div>
      //
      //             <div className="signup-form">
      //                <div className="title">Signup</div>
      //                <form action="#">
      //                   <div className="input-boxes">
      //                      <div className="input-box">
      //                         <i className="fas fa-user"></i>
      //                         <input type="text" placeholder="Enter your name" required />
      //                      </div>
      //                      <div className="input-box">
      //                         <i className="fas fa-envelope"></i>
      //                         <input type="text" placeholder="Enter your email" required />
      //                      </div>
      //                      <div className="input-box">
      //                         <i className="fas fa-lock"></i>
      //                         <input type="password" placeholder="Enter your password" required />
      //                      </div>
      //                      <div className="button input-box">
      //                         <input type="submit" value="Sumbit" />
      //                      </div>
      //                      <div className="text sign-up-text">Already have an account? <label htmlFor="flip">Login now</label></div>
      //                   </div>
      //                </form>
      //             </div>
      //
      //          </div>
      //       </div>
      //    </div>
      // </div>


   )
}
