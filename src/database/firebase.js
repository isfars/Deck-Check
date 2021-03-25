import "@firebase/app";
import firebase from "@firebase/app";
import "@firebase/firestore";
import firebaseConfig from '../../firebase-creds';

firebase.initializeApp(firebaseConfig)

export default firebase;
