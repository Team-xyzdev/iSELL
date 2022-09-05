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
    onAuthStateChanged
  } from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc, DocumentData, DocumentReference, DocumentSnapshot } from 'firebase/firestore';

//storage ref
import {getStorage} from 'firebase/storage'


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
const app =  initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});


export const auth = getAuth();

// google popup
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// firestore
export const db = getFirestore();

// create user document
export const createUserDocumentFromAuth = async (
  userAuth : any,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef 
   : DocumentReference<DocumentData>= doc(db, 'users', userAuth.uid);

  const userSnapshot 
   : DocumentSnapshot<DocumentData> = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName , email } : any = userAuth;
    const createdAt: Date = new Date();
    const verification : boolean = false;
    const businessDetails : Object = {
      business_name : "",
      business_description : "",
      business_url : ""
    }
     
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        verification,
        businessDetails,
        ...additionalInformation,
      });
    } catch (error : any) {
      console.log('error creating the user', error.message);
    }
  }


  return userDocRef;

  
};

// check business verification
export const checkverification = async (uid: any ) => {
  const userDocRef = doc(db, 'users', uid);

  const userSnapshot = await getDoc(userDocRef)

  return userSnapshot.data()?.verification
}


// 
export const createAuthUserWithEmailAndPassword = async (email : string, password : string) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email , password);
};

// sign in with email and password
export const signInAuthUserWithEmailAndPassword = async (email : string, password : string) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListener = (callback : any) =>
  onAuthStateChanged(auth, callback);

  // storage 
 export const storage = getStorage(app);

 // adding set up business details to firestore and update verification
export const addSetupDetails = async (uid, values) => {
  const getDocRef = doc(db, 'users', uid);

  const userSnapshot =  await getDoc(getDocRef);
  const {businessName, 
    description, 
    businessLogoUrl} = values

    

  if(!userSnapshot.data()?.verification) {
        console.log(values, 'values')
    try {
      await setDoc(getDocRef, {
      verification : true,
       businessDetails : {
         business_name : businessName,
         business_description : description,
         business_url : businessLogoUrl
       }
      }, {merge : true})
    }
    catch(error : any){
     console.log(error);
    }
  }
  console.log(userSnapshot.data());
}