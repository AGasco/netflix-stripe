import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyBIeNGAD5ffMpAvirvhlUy2ZxezXxC4WDw',
  authDomain: 'netflix-stripe-7c0d2.firebaseapp.com',
  projectId: 'netflix-stripe-7c0d2',
  storageBucket: 'netflix-stripe-7c0d2.appspot.com',
  messagingSenderId: '933118123282',
  appId: '1:933118123282:web:51f3617e15c8927c46a7cb'
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore();

export { auth };
export default db;
