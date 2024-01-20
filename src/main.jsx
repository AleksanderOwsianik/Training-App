import React from 'react';
import ReactDOM from 'react-dom/client';
import TrainingApp from '@/TrainingApp';
import '@/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrainingApp />
  </React.StrictMode>,
);

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQs3tgFknSsXIDuQxtbVg2ncRPyoKAVXg",
  authDomain: "training-app-2b44b.firebaseapp.com",
  databaseURL: "https://training-app-2b44b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "training-app-2b44b",
  storageBucket: "training-app-2b44b.appspot.com",
  messagingSenderId: "822653711548",
  appId: "1:822653711548:web:f1658770c6ac7e135f4cb9",
  measurementId: "G-M7G4PT9B7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
