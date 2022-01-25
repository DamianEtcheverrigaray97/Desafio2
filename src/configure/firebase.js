// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfaHYMH_-6DrW-jyhcL3bCKU07nPb-7GI",
    authDomain: "simple-pc-coderhouse.firebaseapp.com",
    projectId: "simple-pc-coderhouse",
    storageBucket: "simple-pc-coderhouse.appspot.com",
    messagingSenderId: "621848938905",
    appId: "1:621848938905:web:61d62977fb166a6b6e6b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)