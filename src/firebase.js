// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7aBT6LYvPniKQ-R-RO_4jFKqYqkYUj5Y",
  authDomain: "ubeatz-964ca.firebaseapp.com",
  projectId: "ubeatz-964ca",
  storageBucket: "ubeatz-964ca.appspot.com",
  messagingSenderId: "760404801840",
  appId: "1:760404801840:web:1a0165bd8f34c9d73670f5",
  measurementId: "G-56X29PEY5R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);