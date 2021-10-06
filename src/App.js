

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Messenger from "./pages/messenger/Messenger";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          {/*if there is user go==>home , no user===>register */}
          {user ? <Home /> : <Login />}
        </Route>
        <Route  path='/login'> {user ? <Redirect to='/' /> : <Login />}</Route>
        <Route  path='/register'>
          {user ? <Redirect to='/' /> : <Register />}
        </Route>
        <Route  path='/profile/:username'>
          {user ? <Profile /> : <Login />}
        </Route>
        <Route  path="/messenger">
         {!user ? <Redirect to="/" /> : <Messenger />}
       </Route>
      </Switch>
    </Router>
  );
}

export default App;





// import Home from "./pages/home/Home";
// import Profile from "./pages/profile/Profile";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";
// import Messenger from "./pages/messenger/Messenger";
// function App() {
//   const { user } = useContext(AuthContext);
//   return  (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//     {/*if there is user go==>home , no user===>register */}
//         {user ? <Home /> : <Login />}
//         </Route>
//         <Route path="/login"> {user ? <Redirect to="/" /> : <Login />}
//         </Route>
//         <Route path="/register">
//         {user ? <Redirect to="/" /> : <Register />}
//         </Route>
//         <Route path="/profile/:username">
//           <Profile />
//         </Route>
//         <Route path="/messenger">
//           {!user ? <Redirect to="/" /> : <Messenger />}
//         </Route>
//       </Switch>
//     </Router>
//   );;
    
    
    
    
 
// }

// export default App;
