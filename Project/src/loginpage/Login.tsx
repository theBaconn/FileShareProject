import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");  // state for email input
  const [password, setPassword] = useState<string>("");  // state for password input
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    // Implement login authentication logic here
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Full-screen container that centers content */}

      <div
        className="md:w-[57.6388889%] w-full h-1/2 md:h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url('/src/assets/cyber.jpg')" }}
      >
        {/* Left section with the background image */}

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          {/* Replaced button with a title */}
          
          <h2 className="text-4xl text-white font-semibold">
            Secure Messaging
          </h2>
          {/* Header text as title */}
        </div>
      </div>

      <div className="md:w-[42.3611111%] w-full h-1/2 md:h-full flex items-center justify-center bg-white">
        {/* Right section with login box */}
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-sm w-full mx-4 md:mx-0">
          {/* Container for the login form */}
          
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center">Login</h1>
          {/* Login form title */}

          <p className="text-gray-600 mb-3 md:mb-4 text-center">
            Please enter your login details to sign in.
          </p>

          <form onSubmit={handleLogin}>
            {/* Form submission triggers handleLogin */}
            <div className="mb-3 md:mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              {/* Label for email input */}

              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {/* Email input field */}
            </div>

            <div className="mb-4 md:mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              {/* Label for password input */}

              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {/* Password input field */}
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            {/* Submit button */}
          </form>

          <div className="mt-3 md:mt-4 text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <button className="mt-2 text-sm text-indigo-600 hover:text-indigo-500" onClick={() => navigate('/register')}>
              Register Here
            </button>
            {/* Register link as a button to avoid page reload */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;