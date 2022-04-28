// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgt_gsollS3Sl1JMpIJrxaUb6dviiF2dc",
  authDomain: "basic-3cc19.firebaseapp.com",
  projectId: "basic-3cc19",
  storageBucket: "basic-3cc19.appspot.com",
  messagingSenderId: "1045426297421",
  appId: "1:1045426297421:web:53dff1ec33bf2256521a04",
  measurementId: "G-96SVD62XH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;