// import firebase from "firebase";
// import { Firestore } from "firebase/firestore"

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// if (!firebase.apps.length) {
//     firebase.initializeApp({
//         apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//         authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     })
// }

const firebase = initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
})

const firestore = getFirestore(firebase);

export { firebase, firestore };