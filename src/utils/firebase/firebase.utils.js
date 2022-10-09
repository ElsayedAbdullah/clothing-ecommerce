// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  // if user data doesn't exist
  if (!userSnapshot.exists()) {
    // set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if user exists
  // return userDocRef
  return userDocRef;
};
