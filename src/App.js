import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Chat from "./components/Chat";
import Login from "./components/Login";
import SideBar from "./components/SideBar";
import { auth } from "./firebase";
import { login, logout, selectUser } from "./redux/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      {user ? (
        <>
          <SideBar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
