// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCeFyf6k0_gogFoEqWeavdDpmYgN5Cvj54",
  authDomain: "discord-clone-193d0.firebaseapp.com",
  databaseURL: "https://discord-clone-193d0.firebaseio.com",
  projectId: "discord-clone-193d0",
  storageBucket: "discord-clone-193d0.appspot.com",
  messagingSenderId: "464009835791",
  appId: "1:464009835791:web:dba9464a98cc03d775ba7a",
  measurementId: "G-DK2BBSY7BC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
