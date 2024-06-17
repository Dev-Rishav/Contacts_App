// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOmYtYHTwFnYDDmVHDOVipBeY-45sW1Os",
  authDomain: "conatcts-app.firebaseapp.com",
  projectId: "conatcts-app",
  storageBucket: "conatcts-app.appspot.com",
  messagingSenderId: "771354154516",
  appId: "1:771354154516:web:eaaa9e1d2956afeed17901"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);