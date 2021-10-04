
import { createContext, useReducer,useEffect } from "react";
//import  AuthReducer
import AuthReducer from "./AuthReducer";
//initial state
const INITIAL_STATE = {
    user:JSON.parse(localStorage.getItem("user")) || null,
  //{
  //     id: 180,
  //     username: "dunia",
  //     email: "dunia@gmail.com",
  //     password: "$2b$10$Ga4/8ItC96XO4CAWleBR2.C34OiJ89mb74FNFbmNOq5/ZSZc3cjDK",
  //     profilePicture: "dunia/saif.png",
  //     coverPicture: "",
  //     followers: [],
  //     followings: [],
  //     isAdmin: false,
  //     desc: "hello from dunia",
  //     city: "Amman",
  //     from: "Jordan",
  //     relationship: "1",
      
  // },
    isFetching: false,
    error: false,
  };
//create context
  export const AuthContext = createContext(INITIAL_STATE);

  export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])

    return (
        //sharing all of this values with app ====> wrapping this in index.js
        <AuthContext.Provider
          value={{
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



