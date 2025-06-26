// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfu8i3amNeKeYFKHqfbP56s9y0UgQchj8",
    authDomain: "ecommerce-zp.firebaseapp.com",
    projectId: "ecommerce-zp",
    storageBucket: "ecommerce-zp.firebasestorage.app",
    messagingSenderId: "188928194135",
    appId: "1:188928194135:web:4ef69b2d475a537c8b9512",
    measurementId: "G-50H2QNCJLJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

