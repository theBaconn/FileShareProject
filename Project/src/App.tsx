import React from "react";
import { Routes, Route, Navigate, Router, BrowserRouter } from "react-router-dom";  // Import React Router components
import "./style.scss"
import Login from "./loginpage/Login";        // Login component
import Register from "./loginpage/Register";  // Register component
import ForgotPassword from "./loginpage/ForgotPassword";  // ForgotPassword component
import MessageHome from "./pages/messages/MessageHome";

function App() {
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
    </div>
  );
}

export default App;  // Export App component
