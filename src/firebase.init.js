// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyAM683LzgUNotL9dbF8LA5tVPMBEh4n5O0",
  authDomain: "jerins-parlour-cfb82.firebaseapp.com",
  projectId: "jerins-parlour-cfb82",
  storageBucket: "jerins-parlour-cfb82.appspot.com",
  messagingSenderId: "652252284627",
  appId: "1:652252284627:web:49eef3a362c14ab017b626",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
