// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD72RePd18TGaIJjXdxpADcw3MH39vTk-o",
  authDomain: "ajsl-pulmonary-dangerous.firebaseapp.com",
  projectId: "ajsl-pulmonary-dangerous",
  storageBucket: "ajsl-pulmonary-dangerous.firebasestorage.app",
  messagingSenderId: "393543792981",
  appId: "1:393543792981:web:cc12304939d5d67e1c57dc",
  measurementId: "G-3G646LE79C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);