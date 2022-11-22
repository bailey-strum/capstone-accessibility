// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, getFirestore, collection, doc, setDoc, arrayUnion } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "@firebase/auth";

// Your web app's Firebase configuration
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
const db = getFirestore(app);
const auth = getAuth(app);


const logInWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User has signed in!')
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name: string, email: string, password: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err: any) {
        console.error(err);
        alert(err);
    }
};

const sendPasswordReset = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth).then(r => {
        console.log('User has logged out.')
    });
};

// dynamically adds and updates scores based on quiz ID
const stats = async (quizID: string, score: number) => {
    const user = auth.currentUser;
    if(user){
        // this adds score data if the user's document exists
        // otherwise creates a new document and adds score data
        await setDoc(doc(db, "userStatistics", user.uid),  
        { 
            name: user.email,
            [quizID]: arrayUnion(score),
        },
            {
                merge: true
            })
            .then(() => {
                console.log("Document successfully updated.")})
            .catch((error) => {
                console.log('Error updating document.')});
    }
      
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    stats,
};