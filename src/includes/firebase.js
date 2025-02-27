import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBMXe0K433Xd3o3ZNQMyrapqNJnL-TY1ws",
  authDomain: "noteballs-f51f9.firebaseapp.com",
  projectId: "noteballs-f51f9",
  storageBucket: "noteballs-f51f9.firebasestorage.app",
  messagingSenderId: "477318759872",
  appId: "1:477318759872:web:904aec70959f119058f425",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
