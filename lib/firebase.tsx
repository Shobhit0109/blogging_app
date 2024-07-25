// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOrSL22QXDJzzNSrX1XRc0Vmd-MarKf44",
  authDomain: "blogging-app-e1e09.firebaseapp.com",
  projectId: "blogging-app-e1e09",
  storageBucket: "blogging-app-e1e09.appspot.com",
  messagingSenderId: "455361238344",
  appId: "1:455361238344:web:bf1bbb327db9f13d4e8f7d",
  measurementId: "G-SQ1YTSWTGL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
export const auth = getAuth(app);
