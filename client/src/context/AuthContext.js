import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
   user: {
      _id: "64d66dbba698f00ae8b52a85",
      username: "Diana",
      email: "dee.@gmail.com",
      password: "$2b$10$Y9AHlCGEpV7YgghCBqFu8Omy7cVDxJhV4rZJERW.ALjYitoX2n2WG",
      profilePicture: "person/person2.jpeg",
      coverPicture: "person/Cover/Cover1.jpeg",
      followers: [],
      followings: [],
      isAdmin: false,
   },
   isFetching: false,
   error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

   return (
      <AuthContext.Provider value={{
         user: state.user,
         isFetching: state.isFetching,
         error: state.error,
         dispatch
      }}
      >
         {children}
      </AuthContext.Provider>
   );
}


