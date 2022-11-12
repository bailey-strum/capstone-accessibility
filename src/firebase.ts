// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCyYav8D_MiUl5sQQEmDDSTTgvn2WOw69g",
    authDomain: "capstone-accessibility.firebaseapp.com",
    databaseURL: "https://capstone-accessibility-default-rtdb.firebaseio.com",
    projectId: "capstone-accessibility",
    storageBucket: "capstone-accessibility.appspot.com",
    messagingSenderId: "893528820790",
    appId: "1:893528820790:web:adb562a1e1ed3107e51c97",
    measurementId: "G-R32ST66YLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
