// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjIoDg9UuYsWcnDC5cxvpyaS6URKdOm-4",
    authDomain: "ecommerce-demo-cbd83.firebaseapp.com",
    projectId: "ecommerce-demo-cbd83",
    storageBucket: "ecommerce-demo-cbd83.firebasestorage.app",
    messagingSenderId: "632347598092",
    appId: "1:632347598092:web:2d914ad4d1976ef6f4bd29",
    measurementId: "G-9GMT6Z8YF7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app)