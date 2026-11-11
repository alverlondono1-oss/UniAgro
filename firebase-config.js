import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDoc, addDoc, getDocs, onSnapshot, query, where, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgCahd5EGN6_f3LgUDBN2LBnPsmIuu1h0",
  authDomain: "uniagro-c28a1.firebaseapp.com",
  projectId: "uniagro-c28a1",
  storageBucket: "uniagro-c28a1.firebasestorage.app",
  messagingSenderId: "628982611619",
  appId: "1:628982611619:web:eeede64203d82c8b068916",
  measurementId: "G-JEW6HSGCZT"
};

// Inicializar Firebase, BD y Auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("✅ Firebase, Base de Datos (Firestore) y Autenticación conectados.");

// Exportamos todo para usarlo en historial, login, registro y producto
export {
  db,
  auth,
  collection,
  doc,
  setDoc,
  getDoc,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut
};
