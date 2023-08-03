import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB947m3Rt-xGGXfAXA2yGUnRus4G6sOblI",
  authDomain: "mercado-simple.firebaseapp.com",
  projectId: "mercado-simple",
  storageBucket: "mercado-simple.appspot.com",
  messagingSenderId: "721018313949",
  appId: "1:721018313949:web:6d2a5c7655a3f75ebb4f34",
  measurementId: "G-FT6BLN406D"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
