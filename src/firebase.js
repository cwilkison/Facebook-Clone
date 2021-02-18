import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDx9OB_nj_gCiVITqzI4dy5HqiuUuRtFpc",
  authDomain: "facebook-clone-17571.firebaseapp.com",
  projectId: "facebook-clone-17571",
  storageBucket: "facebook-clone-17571.appspot.com",
  messagingSenderId: "228301691598",
  appId: "1:228301691598:web:e1e901d7dfd212f31e4e9f",
  measurementId: "G-7SKPX2LMPL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
