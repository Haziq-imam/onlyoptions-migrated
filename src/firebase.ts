import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcvD_m0JgLIY0ZNxwgNagvR5ArhpoxQz8",
  authDomain: "onlyoptions-us.firebaseapp.com",
  projectId: "onlyoptions-us",
  storageBucket: "onlyoptions-us.firebasestorage.app",
  messagingSenderId: "990799707102",
  appId: "1:990799707102:web:943c391d5499f7101dfb4f",
  measurementId: "G-FJZNWDQY1E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
