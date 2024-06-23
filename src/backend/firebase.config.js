// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgB-J8yT186TFCzIkvnRTf3UkEdPH-d1I",
  authDomain: "parental-authorization-c5bb1.firebaseapp.com",
projectId: "parental-authorization-c5bb1",
storageBucket: "parental-authorization-c5bb1.appspot.com",
messagingSenderId: "206454421450",
appId: "1:206454421450:web:14b51de0b8712df138c133",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authConfig = getAuth(app);

export const db = getFirestore(app);
export default app;
