// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3DuZqqQ4j1T2oix5JxHIxMiaq6RlfxKY",
  authDomain: "netflix-gpt-3f7b4.firebaseapp.com",
  projectId: "netflix-gpt-3f7b4",
  storageBucket: "netflix-gpt-3f7b4.appspot.com",
  messagingSenderId: "130893003467",
  appId: "1:130893003467:web:4a37ec5ad701174d61794e",
  measurementId: "G-B9QZF51WH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

