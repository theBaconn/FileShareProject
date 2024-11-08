import React, { FormEvent } from "react";
import { toast } from "react-toastify"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; 
import { doc, setDoc } from "firebase/firestore" 


const Register: React.FC = () => {

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // prevent default form behavior

    const formData = new FormData(e.currentTarget);

    const { username, email, password, repassword} = Object.fromEntries(formData.entries()) as Record<string, string>; 

    if (!username){
      return toast.warn("Please enter username")
    }
    if (!email){
      return toast.warn("Please enter email")
    }
    if (!password){
      return toast.warn("Please enter password")
    }
    if (!repassword){
      return toast.warn("Please re-enter password")
    }
    if (password!=repassword){
      return toast.warn("Passwords do not match!")
    }

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
      });
      
      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!")
    }catch(err: unknown){
      if (err instanceof Error){
        console.log(err)
        toast.error(err.message)
      }
      else{
        console.log("An unkown error occurred:", err)
        toast.error('An unkown error occurred');
      }
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
      <form 
      id="registerForm"
      onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="username"
            name="username"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Username"
            //required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Email"
            //required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Password"
            //required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="repassword"
            name="repassword"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            placeholder="Confirm password"
            //required
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