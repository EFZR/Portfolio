import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuMESBQ_IjjqUg0sknvo_sxDuFsMHw9Nw",
  authDomain: "portfolio-79905.firebaseapp.com",
  projectId: "portfolio-79905",
  storageBucket: "portfolio-79905.appspot.com",
  messagingSenderId: "944152623897",
  appId: "1:944152623897:web:b566eb2771c37aabfb6388",
  measurementId: "G-59L3SMS9KK"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
