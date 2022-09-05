// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//importing firebase modules
import {
  onAuthStateChangedListener, 
  createUserDocumentFromAuth
} from './firebase/firebase.utils'

//importing relevant modules + files
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import LoginPage from './pages/login/LoginPage';
import SetUpPage from './pages/setup/SetupPage';
import RegisterPage from './pages/register/RegisterPage';

//importing setCurrentUser from  redux reducer
import { setCurrentUser } from './store/user/user.reducer';


function App() {
 const dispatch = useDispatch()
  

 // setting login authentication
useEffect(() => {
 
  const unsubscribe = onAuthStateChangedListener((user : Array<any>) => {
    if (!user)  return
    console.log(user)
    
    if (user) {
      createUserDocumentFromAuth(user);
    }
    dispatch(setCurrentUser(user["uid"]));
  });

 

  return unsubscribe
   // eslint-disable-next-line
}, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setup" element={<SetUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
