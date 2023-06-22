// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVQ5iUk62DRJp05WrfErL8Tsc9XEqETE0",
  authDomain: "portfolio-pablo-project.firebaseapp.com",
  projectId: "portfolio-pablo-project",
  storageBucket: "portfolio-pablo-project.appspot.com",
  messagingSenderId: "324537558643",
  appId: "1:324537558643:web:2d1583dddb33d7b1166c06"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
