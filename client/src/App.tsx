// Copyright iSELL 💳 2022
// 17 U.S.C §§ 101-1511

//importing firebase modules
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./firebase/firebase.utils";

//importing relevant modules + files
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";

import LoginPage from "./pages/login/LoginPage";
import SetUpPage from "./pages/setup/SetupPage";
import RegisterPage from "./pages/register/RegisterPage";
import DashboardPage from "./pages/dashboard/DashboardPage";

//importing setCurrentUser from  redux reducer
import { setCurrentUser } from "./store/user/user.reducer";
import Product from "./components/product/product.components";
import { RootState } from "./store/store";
import CheckOut from "./pages/check-out/check-out";

function App() {
  const getUserUid: any = useSelector(
    (state: RootState) => state.currentUser.currentUser
  );
  const dispatch = useDispatch();

  // setting login authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: Array<any>) => {
      console.log(user);
      if (!user) return;
      console.log(user);

      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user["uid"]));
    });

    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/setup" element={<SetUpPage />} />
        <Route path="/product" element={<Product />} />
        {getUserUid && (
          <Route path="/dashboard/*" element={<DashboardPage />} />
        )}
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </Router>
  );
}

export default App;
