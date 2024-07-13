// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "metroplex-6b260.firebaseapp.com",
  projectId: "metroplex-6b260",
  storageBucket: "metroplex-6b260.appspot.com",
  messagingSenderId: "272373103993",
  appId: "1:272373103993:web:444f4f66c6999c4a2e43a8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);