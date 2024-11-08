

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9NHLs1UQX-Idi-Qtz7n9HSdHDV21s92U",
  authDomain: "csc-2362-project.firebaseapp.com",
  projectId: "csc-2362-project",
  storageBucket: "csc-2362-project.firebasestorage.app",
  messagingSenderId: "986072250414",
  appId: "1:986072250414:web:884e9f1a26012121b207bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();