// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCj-a-nzOGoWVvqZZHFw0YT9ux14GImeTA",
  authDomain: "social-media-72dc1.firebaseapp.com",
  projectId: "social-media-72dc1",
  storageBucket: "social-media-72dc1.appspot.com",
  messagingSenderId: "125703898315",
  appId: "1:125703898315:web:e3484136b509254672074e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
