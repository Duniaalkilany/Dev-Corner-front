//take userCredentials to make req
//return nothing 
export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });
  //if its success 
  //it will return payload==>user===>o/p of response ===>use this user ===>this user send to reducer 
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  //if userCredentials is not correct ==> error==>to reducer 
  export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload:error,
  });
  
  