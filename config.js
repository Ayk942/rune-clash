// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEtDqk6LbvP1jC_fA9nI9jUJk7ZqYoOFs",
  authDomain: "rune-clash.firebaseapp.com",
  databaseURL: "https://rune-clash-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rune-clash",
  storageBucket: "rune-clash.firebasestorage.app",
  messagingSenderId: "863818089348",
  appId: "1:863818089348:web:d43084fdce521bbc44d3d1",
  measurementId: "G-CBRMGD6NEK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
