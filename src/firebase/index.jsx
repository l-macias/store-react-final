import firebase from "firebase/app";
import "@firebase/firestore";



const app = firebase.initializeApp({
    apiKey: "AIzaSyBEqrT9pcmTf4gWFH5821IGf0e7rTUNq90",
    authDomain: "react-coder-macias.firebaseapp.com",
    projectId: "react-coder-macias",
    storageBucket: "react-coder-macias.appspot.com",
    messagingSenderId: "374471900554",
    appId: "1:374471900554:web:042b25934ca1ee2b055c73"

    // apiKey: "AIzaSyDIeR8d5Qh93J45IfVgpahHV3JWLvpZPVU",
    // authDomain: "spotba-e10b0.firebaseapp.com",
    // projectId: "spotba-e10b0",
    // storageBucket: "spotba-e10b0.appspot.com",
    // messagingSenderId: "685829136618",
    // appId: "1:685829136618:web:a8f4c3a3ee6e43cff57793"
})

  export const getFirebase=()=>{
      return app
  }

  export const getFirestore=()=>{
      return firebase.firestore(app)
  }