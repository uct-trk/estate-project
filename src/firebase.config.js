// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyC6hNl3KVMOF8-YV2ngJ5s8iHbhuSfyB6M",
    authDomain: "house-marketplace-app-ffa3b.firebaseapp.com",
    projectId: "house-marketplace-app-ffa3b",
    storageBucket: "house-marketplace-app-ffa3b.appspot.com",
    messagingSenderId: "47414973924",
    appId: "1:47414973924:web:14a2c64ac63166befa63f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();