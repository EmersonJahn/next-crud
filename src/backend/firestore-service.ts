import app from './config';

import { getFirestore, collection, deleteDoc, doc, addDoc, setDoc, getDocs } from 'firebase/firestore/lite';

const firestore = getFirestore(app);

export { firestore, collection, deleteDoc, doc, addDoc, setDoc, getDocs };


