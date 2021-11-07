import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfjQTGTUBMqgNZmmeadnouWCWzbhdqRT4",
  authDomain: "mob-project-b4c6b.firebaseapp.com",
  projectId: "mob-project-b4c6b",
  storageBucket: "mob-project-b4c6b.appspot.com",
  messagingSenderId: "293299691893",
  appId: "1:293299691893:web:3ff018e40b3a91ee28333c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();