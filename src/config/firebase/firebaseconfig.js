import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBTjahgvOjSpUpwHDUAsJVSI7g4XYEpEeI",
    authDomain: "school-lms-216c7.firebaseapp.com",
    projectId: "school-lms-216c7",
    storageBucket: "school-lms-216c7.firebasestorage.app",
    messagingSenderId: "339748706978",
    appId: "1:339748706978:web:87d1f2e42325a1e73515fb",
    measurementId: "G-50ZPXEHYLM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;

