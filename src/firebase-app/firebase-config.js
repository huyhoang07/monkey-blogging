import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCDQNdtSTRYhXNW-KZND5uGfdWr81oA9Ds",
  authDomain: "monkeyblogging-214c4.firebaseapp.com",
  projectId: "monkeyblogging-214c4",
  storageBucket: "monkeyblogging-214c4.appspot.com",
  messagingSenderId: "726751021526",
  appId: "1:726751021526:web:6f5f2c070433fecfd87c77"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
