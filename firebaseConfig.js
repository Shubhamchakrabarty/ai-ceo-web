// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbJqTyCiwFSvM1JqAneD0JT1GetOvonuM",
  authDomain: "ai-ceo-eef3a.firebaseapp.com",
  projectId: "ai-ceo-eef3a",
  storageBucket: "ai-ceo-eef3a.firebasestorage.app",
  messagingSenderId: "349838486450",
  appId: "1:349838486450:web:2790444a65d3999c1392ab",
  measurementId: "G-7YDGVF09WF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);