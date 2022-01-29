import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCgNOTUiFb9MR7POfgEfgGYP_PAoFeslDI",
  authDomain: "house-marketplace-63bed.firebaseapp.com",
  projectId: "house-marketplace-63bed",
  storageBucket: "house-marketplace-63bed.appspot.com",
  messagingSenderId: "749668338994",
  appId: "1:749668338994:web:a72a63130a5f9e7b055b2b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
