// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVQmsHPWBtUbjgo5Q0s9YSpudrdcnGdlE",
  authDomain: "travelbuddy-cd9a5.firebaseapp.com",
  projectId: "travelbuddy-cd9a5",
  storageBucket: "travelbuddy-cd9a5.firebasestorage.app",
  messagingSenderId: "1021085013254",
  appId: "1:1021085013254:web:c8fdf2b3e1afb774d0ba87",
  measurementId: "G-250PMPGDCL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)