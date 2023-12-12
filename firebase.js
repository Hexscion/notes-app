// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX5OLeI88zBndrb7mAJ2anVgUEjlL5Eus",
  authDomain: "firestore-database-b1c21.firebaseapp.com",
  projectId: "firestore-database-b1c21",
  storageBucket: "firestore-database-b1c21.appspot.com",
  messagingSenderId: "190009788413",
  appId: "1:190009788413:web:7c19993520aa76ec19fb94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");