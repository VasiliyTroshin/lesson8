import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnwri9tz9--IKbdSDcjGYV497SzSckg0U",
  authDomain: "authhw-6ed93.firebaseapp.com",
  projectId: "authhw-6ed93",
  storageBucket: "authhw-6ed93.appspot.com",
  messagingSenderId: "402283536901",
  appId: "1:402283536901:web:8efe54ef69812bfcbeb26c"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db=app.database().ref();
const auth=app.auth();

export {db,auth};