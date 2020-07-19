import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnl3EJYpuSZk2LCT3N0xqwEcw_KEIb2Ak",
  authDomain: "instagram-clone-ecfc9.firebaseapp.com",
  databaseURL: "https://instagram-clone-ecfc9.firebaseio.com",
  projectId: "instagram-clone-ecfc9",
  storageBucket: "instagram-clone-ecfc9.appspot.com",
  messagingSenderId: "260164483659",
  appId: "1:260164483659:web:15e098e604875fbb2eabce",
  measurementId: "G-Q145QKDGQW",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
