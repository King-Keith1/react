import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//firebase dependancies
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQhrILPB_M1Ww3jE44OUOuozJjeGVEAnc",
    authDomain: "codereactcolledge.firebaseapp.com",
    projectId: "codereactcolledge",
    storageBucket: "codereactcolledge.firebasestorage.app",
    messagingSenderId: "307229310614",
    appId: "1:307229310614:web:3e73ce90f5aec3ca4eccb7",
    measurementId: "G-TS0YF9PWWV"
};

firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
