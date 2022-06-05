// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBnSVPEEvGcuWtW-Q-U_L8elJLgW3Ib40s',
  authDomain: 'pro360-e5c8d.firebaseapp.com',
  projectId: 'pro360-e5c8d',
  storageBucket: 'pro360-e5c8d.appspot.com',
  messagingSenderId: '473117367373',
  appId: '1:473117367373:web:748d1eff15e0ceb8129004',
  measurementId: 'G-31Y3B01HFB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
