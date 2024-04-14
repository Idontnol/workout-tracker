import {initializeApp} from 'firebase/app';
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDXDcKlS_Pu-5vqjh3h6TaZhvwQqJJOC4s",
  authDomain: "workout-tracker-ae448.firebaseapp.com",
  projectId: "workout-tracker-ae448",
  storageBucket: "workout-tracker-ae448.appspot.com",
  messagingSenderId: "111256814991",
  appId: "1:111256814991:web:f370f5a0dd78e303d2f7fa",
  measurementId: "G-1D985GFT02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//initialize authentications
export const auth= getAuth(app);
export const googleAuth=new GoogleAuthProvider();
export const facebookAuth=new FacebookAuthProvider();
//database
export const db=getFirestore(app);
export const storage=getStorage(app);