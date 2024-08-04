// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmAGRSvw1Ci2o2XhXa-6_CJAWVCIuGebg",
    authDomain: "crocs-90a2b.firebaseapp.com",
    projectId: "crocs-90a2b",
    storageBucket: "crocs-90a2b.appspot.com",
    messagingSenderId: "561122568414",
    appId: "1:561122568414:web:2382a5d5fdab185ea2ba4f",
    measurementId: "G-7VN8GJD83X"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
