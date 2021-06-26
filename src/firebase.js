import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyCAstfIVKRIl5ad7j1WRcvyj6bNhiEgu6A",
  authDomain: "clone-9a27a.firebaseapp.com",
  projectId: "clone-9a27a",
  storageBucket: "clone-9a27a.appspot.com",
  messagingSenderId: "920399642675",
  appId: "1:920399642675:web:11091fe0ee1af3f5a0a346",
  measurementId: "G-15ZSS3WYCQ"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }