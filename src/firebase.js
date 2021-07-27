import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzFUOGk1R6ToXuylzCDbXbW_iw8NqfwwU",
  authDomain: "twitter-clone-c49e0.firebaseapp.com",
  projectId: "twitter-clone-c49e0",
  storageBucket: "twitter-clone-c49e0.appspot.com",
  messagingSenderId: "658572202621",
  appId: "1:658572202621:web:5b2d1187dbabb05ed99714",
  measurementId: "G-077P6KV89M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;