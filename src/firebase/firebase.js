import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // for profile pics if needed

const firebaseConfig = {
  apiKey: "AIzaSyAEQWopj4erudnoHE-n1VTgwPBq3sCnLiI",
  authDomain: "linkbio-gen.firebaseapp.com",
  projectId: "linkbio-gen",
  storageBucket: "linkbio-gen.firebasestorage.app", // ⚠️ small typo here
  messagingSenderId: "904302603294",
  appId: "1:904302603294:web:10ec14bc48ff41095b120f",
  measurementId: "G-8L83HGT8Y6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);

// Storage
export const storage = getStorage(app);
