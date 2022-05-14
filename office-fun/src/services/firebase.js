import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAuyN6287N68VePmMjHcS93EZNYTcEbqxc",
    authDomain: "dragonhack2022-88316.firebaseapp.com",
    databaseURL: "https://dragonhack2022-88316-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "dragonhack2022-88316",
    storageBucket: "dragonhack2022-88316.appspot.com",
    messagingSenderId: "991292872411",
    appId: "1:991292872411:web:6f6f18a9138e01c0cedefe",
    measurementId: "G-ZX54MGS4XB"
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
