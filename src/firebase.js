// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN6rUmqr_zCVG4mrDMbgusLjAZiuC_GLE",
  authDomain: "ubeatz-music.firebaseapp.com",
  projectId: "ubeatz-music",
  storageBucket: "ubeatz-music.appspot.com",
  messagingSenderId: "922479744724",
  appId: "1:922479744724:web:957cf1e1a15e38510f4d41",
  measurementId: "G-FH0P107QG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

let indexDbEnabled = false

try {
  enableIndexedDbPersistence(db);
  indexDbEnabled = true;
} catch (e) {
  if (e.code === 'failed-precondition') {

  } else if (e.code === 'unimplemented') {
    
  }
}