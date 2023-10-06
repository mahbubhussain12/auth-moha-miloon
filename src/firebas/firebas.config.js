// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0MHdeY2x0UtE6-KNLE5V7wVki_cK01N0",
  authDomain: "auth-moha-miloon.firebaseapp.com",
  projectId: "auth-moha-miloon",
  storageBucket: "auth-moha-miloon.appspot.com",
  messagingSenderId: "884390490440",
  appId: "1:884390490440:web:a3249e184f8c0d027fc37d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


