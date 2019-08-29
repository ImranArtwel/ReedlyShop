import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAIzB5_lFQPIgWpAdk0Y8fkAlSIkgp91tI",
    authDomain: "reedlyshop.firebaseapp.com",
    databaseURL: "https://reedlyshop.firebaseio.com",
    projectId: "reedlyshop",
    storageBucket: "",
    messagingSenderId: "456067450299",
    appId: "1:456067450299:web:2ad3e0c5606021ed"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;