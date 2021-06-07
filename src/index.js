import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import SAMPLE_DATA from './nutritionData.json';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdh-orjDpc6AQVpFOEjk4Uq29H5TMGsCs",
    authDomain: "starbucks-nutrition-528a4.firebaseapp.com",
    databaseURL: "https://starbucks-nutrition-528a4-default-rtdb.firebaseio.com",
    projectId: "starbucks-nutrition-528a4",
    storageBucket: "starbucks-nutrition-528a4.appspot.com",
    messagingSenderId: "652177496448",
    appId: "1:652177496448:web:33c68ded2a96cfe5d6c965"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App data={SAMPLE_DATA} />, document.getElementById('root'));