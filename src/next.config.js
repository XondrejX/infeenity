// Import necessary libraries
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Given Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA40VgbGbumI4lKfAZUN5_DP-ualC89rXw",
  authDomain: "infeenity-login.firebaseapp.com",
  projectId: "infeenity-login",
  storageBucket: "infeenity-login.appspot.com",
  messagingSenderId: "140090164729",
  appId: "1:140090164729:web:d3500ad26246c5346e2928",
  measurementId: "G-93BKRB71C6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
