// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBP2jZtXomy61vcB8bx6mxGtcXCGVWf0UA",
  authDomain: "timasystem-21fc4.firebaseapp.com",
  projectId: "timasystem-21fc4",
  storageBucket: "timasystem-21fc4.appspot.com",
  messagingSenderId: "338984671053",
  appId: "1:338984671053:web:5d63c3b9657f10bfa78904",
  measurementId: "G-VE80XD4W4P",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;
