import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBnYpb59zeIGRq8roPbZ3MwjA2WMx5Xp4I",
  authDomain: "ecommerce-test-6283d.firebaseapp.com",
  projectId: "ecommerce-test-6283d",
  storageBucket: "ecommerce-test-6283d.appspot.com",
  messagingSenderId: "260626733153",
  appId: "1:260626733153:web:e835283f4e07796fdff220",
  measurementId: "G-J0G8XLS0L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDeDatos = getFirestore(app)