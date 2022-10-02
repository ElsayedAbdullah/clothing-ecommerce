// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

// Google Authentication
export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt : 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase