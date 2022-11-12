import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyYav8D_MiUl5sQQEmDDSTTgvn2WOw69g",
    authDomain: "capstone-accessibility.firebaseapp.com",
    databaseURL: "https://capstone-accessibility-default-rtdb.firebaseio.com",
    projectId: "capstone-accessibility",
    storageBucket: "capstone-accessibility.appspot.com",
    messagingSenderId: "893528820790",
    appId: "1:893528820790:web:9cc921d1a7c9d83fe51c97",
    measurementId: "G-6D8BHZBY2N"
};

// Initialize Firebase apps.
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);