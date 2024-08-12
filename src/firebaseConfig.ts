// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUqj_pqFUb6Ndg3IQwrzZrtJbk0jTRrt4",
  authDomain: "cortes-premium.firebaseapp.com",
  projectId: "cortes-premium",
  storageBucket: "cortes-premium.appspot.com",
  messagingSenderId: "567072092774",
  appId: "1:567072092774:web:6d699ea01101831a72f3a7",
  measurementId: "G-G3H5DQ2XG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const db = getFirestore(app)