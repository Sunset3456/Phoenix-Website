import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBWUClcjhOy0FTySqbiOvvntimVa88bxjQ",
    authDomain: "phoenix-website-ad52a.firebaseapp.com",
    databaseURL: "https://phoenix-website-ad52a-default-rtdb.firebaseio.com",
    projectId: "phoenix-website-ad52a",
    storageBucket: "phoenix-website-ad52a.firebasestorage.app",
    messagingSenderId: "879503172403",
    appId: "1:879503172403:web:926819e0b5798d9f7b1446",
    measurementId: "G-Y6HESF8Y23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);