import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAIzB5_lFQPIgWpAdk0Y8fkAlSIkgp91tI",
  authDomain: "reedlyshop.firebaseapp.com",
  databaseURL: "https://reedlyshop.firebaseio.com",
  projectId: "reedlyshop",
  storageBucket: "",
  messagingSenderId: "456067450299",
  appId: "1:456067450299:web:2ad3e0c5606021ed",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; // check if userAuth is set

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error);
    }
  }

  return userRef;
};
// export const addCollectionAndDocuments = async (
//   collectionKey,
//   objectsToAdd
// ) => {
//   const collectionRef = firestore.collection(collectionKey);
//   const batch = firestore.batch();
//   objectsToAdd.forEach((obj) => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, obj);
//   });
//   return await batch.commit();
// };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
