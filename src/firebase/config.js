// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVi3yO10_jPYq70gCxpw767-K4ZdI2ql8",
  authDomain: "borrowbuddy-96678.firebaseapp.com",
  projectId: "borrowbuddy-96678",
  storageBucket: "borrowbuddy-96678.appspot.com",
  messagingSenderId: "581148437394",
  appId: "1:581148437394:web:0f0ef3d457cfeea539ef4b",
  measurementId: "G-6TKH2PV8QE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);