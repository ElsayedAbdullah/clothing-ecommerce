// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1OK_Y3QYspzdjgwHuakHqgQV4Nc6mq0c",
  authDomain: "clothing-project-368bc.firebaseapp.com",
  projectId: "clothing-project-368bc",
  storageBucket: "clothing-project-368bc.appspot.com",
  messagingSenderId: "437422355123",
  appId: "1:437422355123:web:43f009e0f14ef7e1b336c6",
  measurementId: "G-2Z2P82CFQF"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Google Authentication
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// firestore for storing data on firebase
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  // if user data doesn't exist
  if (!userSnapshot.exists()) {
    // set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user exists
  // return userDocRef
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!password || !email) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!password || !email) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut(auth);
};


export const onAuthStateChangedListener = (callback)=> {
  return onAuthStateChanged(auth, callback)
}
