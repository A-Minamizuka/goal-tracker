// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuODaG8g9pGDGVfFEXPKfTdWNbUjk8tPE",
  authDomain: "goal-tracker-12a6b.firebaseapp.com",
  projectId: "goal-tracker-12a6b",
  storageBucket: "goal-tracker-12a6b.firebasestorage.app",
  messagingSenderId: "161381410270",
  appId: "1:161381410270:web:bfce4bd54e0f700d93694f",
  measurementId: "G-Q9741QP2VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);