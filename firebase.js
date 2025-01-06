// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBZkixRum2Zhda-dNzYq4vN1KyBqPZzISQ",
  authDomain: "chat-app-32eb5.firebaseapp.com",
  projectId: "chat-app-32eb5",
  storageBucket: "chat-app-32eb5.firebasestorage.app",
  messagingSenderId: "1080679288223",
  appId: "1:1080679288223:web:8d54ac8d3e3894f48d41aa",
  measurementId: "G-FRKH0TNDBC"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, child };
