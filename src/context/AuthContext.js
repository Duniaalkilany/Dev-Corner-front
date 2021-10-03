
import { createContext, useReducer,useEffect } from "react";
//import  AuthReducer
import AuthReducer from "./AuthReducer";
//initial state
const INITIAL_STATE = {
    user: null,
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



