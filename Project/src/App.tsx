import React, {useEffect} from "react";
import { Routes, Route, Navigate, Router, BrowserRouter } from "react-router-dom";  // Import React Router components
import "./style.scss";
import Login from "./loginpage/Login";        // Login component
import Register from "./loginpage/Register";  // Register component
import ForgotPassword from "./loginpage/ForgotPassword";  // ForgotPassword component 
import MessageHome from "./pages/messages/MessageHome";
import Notification from './Notification';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const App = () =>{
  const user = false;

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      console.log(user);
    });

    return () =>{
      unSub();
    };
  }, []);
  

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      {/* Full-screen container, centers content */}
      <BrowserRouter>
      <Routes>
        {/* Define app routes */}

        <Route path="/login" element={<Login />} /> 
        {/* Login page route */}

        <Route path="/register" element={<Register />} /> 
        {/* Register page route */}

        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        {/* Forgot Password page route */}

        <Route path="/" element={<Navigate replace to="/login" />} />
        {/* Default redirect to login */}

        <Route path="/messageshome" element={<MessageHome />} />
        {/* Message home page route */}
      </Routes>
      </BrowserRouter>
      <Notification/> {/*Toast notification*/}
    </div>
  );
}

export default App;  // Export App component
