import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "athexamnotes-5493b.firebaseapp.com",
  projectId: "athexamnotes-5493b",
  storageBucket: "athexamnotes-5493b.firebasestorage.app",
  messagingSenderId: "945247201496",
  appId: "1:945247201496:web:bd09871db6b29b26bf0fad"
};


const app = initializeApp(firebaseConfig);

const auth =  getAuth(app)

const provider = new GoogleAuthProvider()

export{auth,provider}