// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTV8eAXKH0E546DDeTCXRvREz1MgXIF_U",
  authDomain: "thelifeastro-fcf42.firebaseapp.com",
  projectId: "thelifeastro-fcf42",
  storageBucket: "thelifeastro-fcf42.firebasestorage.app",
  messagingSenderId: "284645179232",
  appId: "1:284645179232:web:9af37e19c6d2347ab32805",
  measurementId: "G-D9EHT55SXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }