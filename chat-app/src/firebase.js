import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZkixRum2Zhda-dNzYq4vN1KyBqPZzISQ",
    authDomain: "chat-app-32eb5.firebaseapp.com",
    databaseURL: "https://chat-app-32eb5-default-rtdb.firebaseio.com",
    projectId: "chat-app-32eb5",
    storageBucket: "chat-app-32eb5.firebasestorage.app",
    messagingSenderId: "1080679288223",
    appId: "1:1080679288223:web:8d54ac8d3e3894f48d41aa",
    measurementId: "G-FRKH0TNDBC"
  };

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
