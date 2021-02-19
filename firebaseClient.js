import firebase from "firebase";
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyAapRDW-XIOlb3ui3e3ev3ko-nYqL72coM",
    authDomain: "myapo-81910.firebaseapp.com",
    databaseURL: "myapo-81910.firebaseio.com",
    projectId: "myapo-81910",
    storageBucket: "myapo-81910.appspot.com",
    messagingSenderId: "72808734054",
    appId: "1:72808734054:web:bd455e5595ad8fbaeafca7"
};


export default function firebaseClient() {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  }
}