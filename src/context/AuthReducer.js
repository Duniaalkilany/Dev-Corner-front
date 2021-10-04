//click the login bitton ====> actions====>reducer===>decided which value in state will be update
//clicking on botton===> firstaction (loginstart)===>(for start fetching data)===>thenreducer update the state
//so in the first action i should update fetching
//in second action //after fetching/login success ===>dispatch login success  action and ==>
//take the response ===>then in reducer it will update the user and no fetching any more it will be false==>
//==>also error will be false 
//the second possibility for loginfailed===>in reducer ==>user anf fetching will be false===>and erroe==>true

const AuthReducer = (state, action) => {
  
    switch (action.type) {
      case "LOGIN_START":
        return {
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          user: action.payload,
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          //no user 
          user: null,
          isFetching: false,
          error: action.payload,
        };
        case "FOLLOW":
          return {
            ...state,
            user: {
              ...state.user,
              followings: [...state.user.followings, action.payload],
            },
          };
        case "UNFOLLOW":
          return {
            ...state,
            user: {
              ...state.user,
              followings: state.user.followings.filter(
                (following) => following !== action.payload
              ),
            },
          };
      
        
      
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  //export it then import it in authcontex