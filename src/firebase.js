import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAFfTVCXkoLiSkOCrjkOFmrBMqGKE98d_c",
  authDomain: "linkedin-demo-b353d.firebaseapp.com",
  projectId: "linkedin-demo-b353d",
  storageBucket: "linkedin-demo-b353d.appspot.com",
  messagingSenderId: "665843776015",
  appId: "1:665843776015:web:fc69e32be4e507b0b5c17a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
