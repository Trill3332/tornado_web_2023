// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyClHPG1lc6b5qcvKIVLNMTzMWox_AxUo",
  authDomain: "iblog-login-register.firebaseapp.com",
  projectId: "iblog-login-register",
  storageBucket: "iblog-login-register.appspot.com",
  messagingSenderId: "607777211632",
  appId: "1:607777211632:web:f422bfbbc5f5d9832b2e35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)