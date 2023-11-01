import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import 'firebase/compat/auth';

import { createContext, useContext } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const FirebaseContext = createContext(null);




// firebase config
const firebaseConfig = {
  // apiKey: 'AIzaSyCtozMHWCVpRIbf08hOIz5k7tRw1ftB4xY',
  // authDomain: 'prj-ibc.firebaseapp.com',
  // databaseURL: 'https://prj-ibc-default-rtdb.firebaseio.com',
  // projectId: 'prj-ibc',
  // storageBucket: 'prj-ibc.appspot.com',
  // messagingSenderId: '774653224004',
  // appId: '1:774653224004:web:b3b27805d54f684d598811',
  // measurementId: 'G-SD1SM3LKGH'

  apiKey: "AIzaSyDWvA9sHIVqd45l9UlPDRca1aTwaI4dgdA",
  authDomain: "ibc-project-980f6.firebaseapp.com",
  databaseURL: "https://ibc-project-980f6-default-rtdb.firebaseio.com",
  projectId: "ibc-project-980f6",
  storageBucket: "ibc-project-980f6.appspot.com",
  messagingSenderId: "130699552769",
  appId: "1:130699552769:web:2d8116a99ef8bca1747800",
  measurementId: "G-H91Z92LGP7"
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
export const storage = app.storage();
export const firestore = app.firestore();
export const auth = app.auth();
export const provider = new firebase.auth.GoogleAuthProvider();







// context api
export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {
  const signupUserWithEmailAndPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);


  const signinUserWithEmailAndPass = (email, password) => signInWithEmailAndPassword(auth, email, password);


  const sendPwdResetEmail = (email) => sendPasswordResetEmail(auth, email);

  return <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword ,signinUserWithEmailAndPass,sendPwdResetEmail}}>
    {props.children}
  </FirebaseContext.Provider>
};