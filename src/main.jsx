import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2qOJERDjqvLJR-pxv7e6WmUG5y47tsoQ",
  authDomain: "ecommerce-a04f0.firebaseapp.com",
  projectId: "ecommerce-a04f0",
  storageBucket: "ecommerce-a04f0.appspot.com",
  messagingSenderId: "607371955690",
  appId: "1:607371955690:web:cdacf0fc785b27706df693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
