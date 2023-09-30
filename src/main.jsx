import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA4ZsITTmAYNmaGltq4l3SOjgIvWsUdAtU",
  authDomain: "proyecto-final-c6709.firebaseapp.com",
  projectId: "proyecto-final-c6709",
  storageBucket: "proyecto-final-c6709.appspot.com",
  messagingSenderId: "647091127653",
  appId: "1:647091127653:web:b8dc049b5fc13c6d25cd8c",
  measurementId: "G-2CX0PN10B9"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
