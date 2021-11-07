import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBfjQTGTUBMqgNZmmeadnouWCWzbhdqRT4",
  authDomain: "mob-project-b4c6b.firebaseapp.com",
  projectId: "mob-project-b4c6b",
  storageBucket: "mob-project-b4c6b.appspot.com",
  messagingSenderId: "293299691893",
  appId: "1:293299691893:web:3ff018e40b3a91ee28333c"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

