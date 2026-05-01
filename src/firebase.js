// firebase-service.js или ваш основной файл, например App.jsx

// 1. Импортируем необходимые функции из Firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Только если вы планируете использовать Analytics
import { getDatabase, ref, child, get, set, push } from "firebase/database";

// 2. Ваша конфигурация веб-приложения Firebase
// Скопирована из ваших данных, включая databaseURL
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

// 3. Инициализируем Firebase App
const app = initializeApp(firebaseConfig);

// 4. Инициализируем Google Analytics (если нужно)
// Если вы не используете Google Analytics, закомментируйте или удалите эту строку:
const analytics = getAnalytics(app); 

// 5. Получаем экземпляр Realtime Database
const database = getDatabase(app);

// ================================================================
// Функции для проверки работы Realtime Database
// ================================================================


// Если вы используете React/Vue/Angular, вы можете экспортировать
// app и database, чтобы использовать их в других компонентах.
export { app, database };
