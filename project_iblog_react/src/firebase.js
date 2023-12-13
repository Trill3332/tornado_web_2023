// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2aTnvVglQGpCR1OEnsYz01OaH4hlYYB0",
  authDomain: "iblog-register-login.firebaseapp.com",
  projectId: "iblog-register-login",
  storageBucket: "iblog-register-login.appspot.com",
  messagingSenderId: "249168822820",
  appId: "1:249168822820:web:aa4e2f71f84eebf2b08eb1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);