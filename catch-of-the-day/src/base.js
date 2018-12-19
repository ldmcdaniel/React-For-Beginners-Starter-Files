import Rebase from 're-base';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxMbMy2xv53MXbymfyBlctB7XX5yMBYl4",
  authDomain: "catch-of-the-day-ecd63.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ecd63.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

export default base;
