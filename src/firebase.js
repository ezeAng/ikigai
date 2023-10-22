// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1f9HMg7MHiudjFySZcLNda4quu1Kuxvw",
  authDomain: "ikigai-d0b8b.firebaseapp.com",
  projectId: "ikigai-d0b8b",
  storageBucket: "ikigai-d0b8b.appspot.com",
  messagingSenderId: "682572530147",
  appId: "1:682572530147:web:15e0a397ed4280e88360d6",
  measurementId: "G-E43GX7RB41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


export const auth = getAuth(app);