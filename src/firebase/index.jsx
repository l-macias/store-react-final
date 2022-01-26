import firebase from "firebase/app";
import "@firebase/firestore";



const app = firebase.initializeApp({
    apiKey: "AIzaSyBEqrT9pcmTf4gWFH5821IGf0e7rTUNq90",
    authDomain: "react-coder-macias.firebaseapp.com",
    projectId: "react-coder-macias",
    storageBucket: "react-coder-macias.appspot.com",
    messagingSenderId: "374471900554",
    appId: "1:374471900554:web:042b25934ca1ee2b055c73"


})

export const getFirebase=()=>{
    return app
}

export const getFirestore=()=>{
    return firebase.firestore(app)
}