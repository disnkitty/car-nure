
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; 
import { getDatabase, ref, child, get, set, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAYQ-vB3_Yy7VVBzp77u2DHjzqTrvsJFaA",
  authDomain: "car-nure.firebaseapp.com",
  projectId: "car-nure",
  storageBucket: "car-nure.firebasestorage.app",
  messagingSenderId: "1093358417687",
  appId: "1:1093358417687:web:7cacd0592c8ee00d12e952",
  measurementId: "G-94XPVTD0B0",
  databaseURL: "https://car-nure-default-rtdb.europe-west1.firebasedatabase.app",
};


const app = initializeApp(firebaseConfig);


const analytics = getAnalytics(app); 


const database = getDatabase(app);


export { app, database };
