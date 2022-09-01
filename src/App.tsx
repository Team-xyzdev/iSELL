// Copyright iSELL 💳 2022 
// 17 U.S.C §§ 101-1511

//importing firebase modules
import {
  onAuthStateChangedListener, 
  createUserDocumentFromAuth
} from './firebase/firebase.utils'

//importing relevant modules + files
import "./App.css";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register/Register";
import Home from "./pages/home/Home";
import Login from "./components/Login/Login";
import Setup from "./components/Setup/Setup";

//importing setCurrentUser from  redux reducer
import { setCurrentUser } from './store/user/user.reducer';


function App() {
 const dispatch = useDispatch()
useEffect(() => {
  const unsubscribe = onAuthStateChangedListener((user) => {
    console.log(user);
    if (user) {
      createUserDocumentFromAuth(user);
    }
    dispatch(setCurrentUser(user));
  });

  return unsubscribe
}, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setup" element={<Setup />} />
      </Routes>
    </Router>
  );
}

export default App;
