//to use reducer //you can put this page in login page directly //login request or call 
import axios from "axios";
//userCredential//email, password
export const loginCall = async (userCredential, dispatch) => {
    //dispatch first action //then make req
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    //if req success and i have res ==>dispatch second action==>login success
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};

//call this function in login page//import it in login page 