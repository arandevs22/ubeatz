// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbjkNxEIVOK5cUM2Rv2CMlw7A5aE7UuLQ",
  authDomain: "arandevs-8cba7.firebaseapp.com",
  projectId: "arandevs-8cba7",
  storageBucket: "arandevs-8cba7.appspot.com",
  messagingSenderId: "887744166946",
  appId: "1:887744166946:web:05450626b591e22c141e7b",
  measurementId: "G-XRJQF39DNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);