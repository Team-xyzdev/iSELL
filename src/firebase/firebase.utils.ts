// Copyright Paylancers 💳 2022 
// 17 U.S.C §§ 101-1511

//import firebase config types
import { firebaseConfigTypes } from './firebase.config.types';

import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase configuration
export const firebaseConfig:firebaseConfigTypes = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
}

// initialize the app
 initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});


export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, googleProvider);
// export const db = getFirestore();

// export const createUserDocumentFromAuth = async (
//   userAuth,
//   additionalInformation = {}
// ) => {
//   if (!userAuth) return;

//   const userDocRef = doc(db, 'users', userAuth.uid);

//   const userSnapshot = await getDoc(userDocRef);

//   if (!userSnapshot.exists()) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();

//     try {
//       await setDoc(userDocRef, {
//         displayName,
//         email,
//         createdAt,
//         ...additionalInformation,
//       });
//     } catch (error : any) {
//       console.log('error creating the user', error.message);
//     }
//   }

//   return userDocRef;
// };

// export const createAuthUserWithEmailAndPassword = async (email : string, password : string) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email , password);
// };

// export const signInAuthUserWithEmailAndPassword = async (email : string, password : string) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };