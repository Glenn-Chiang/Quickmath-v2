import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAnYB95hANo0M7A8CdarPPnHLfZwY6vvJE",
  authDomain: "quickmath-2b5e4.firebaseapp.com",
  projectId: "quickmath-2b5e4",
  storageBucket: "quickmath-2b5e4.appspot.com",
  messagingSenderId: "600932342774",
  appId: "1:600932342774:web:3311f318c25ed82c3905d7",
  measurementId: "G-24TVP9SEDD"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db }