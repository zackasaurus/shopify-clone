import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA69O7ypvAaqR4VSYOC3l82oFOdFVZbYZY',
  authDomain: 'shopify-clone-5ca11.firebaseapp.com',
  databaseURL: 'https://shopify-clone-5ca11.firebaseio.com',
  projectId: 'shopify-clone-5ca11',
  storageBucket: 'shopify-clone-5ca11.appspot.com',
  messagingSenderId: '796310237075',
  appId: '1:796310237075:web:f380b5ba1b8ffdfb8c8266',
  measurementId: 'G-FYBRHW53D2',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

// trigger google pop up
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
