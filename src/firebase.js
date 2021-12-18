import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB29K3796QksJIqZFlQfXAxFYrmeJOnYNY",
  authDomain: "clone-ff40a.firebaseapp.com",
  projectId: "clone-ff40a",
  storageBucket: "clone-ff40a.appspot.com",
  messagingSenderId: "271405561065",
  appId: "1:271405561065:web:c1a99e13908f41b5c0ec78",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
