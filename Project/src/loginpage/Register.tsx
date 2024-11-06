import React, { FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";  


const Register: React.FC = () => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // prevent default form behavior

    // Accessing form values directly using e.target
    const displayName = ((e.target as HTMLFormElement)[0] as HTMLInputElement).value;
    const email = ((e.target as HTMLFormElement)[1] as HTMLInputElement).value;
    const password = ((e.target as HTMLFormElement)[2] as HTMLInputElement).value;
    const confirmPassword = ((e.target as HTMLFormElement)[3] as HTMLInputElement).value;
    

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });};

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Confirm password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-black text-sm font-medium rounded-md text-black bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;