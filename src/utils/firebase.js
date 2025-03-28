// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyLNtngz6Z2XXTGrcacxXJAT8_JukEmPc",
  authDomain: "netflix-gpt-609e2.firebaseapp.com",
  projectId: "netflix-gpt-609e2",
  storageBucket: "netflix-gpt-609e2.firebasestorage.app",
  messagingSenderId: "915712863134",
  appId: "1:915712863134:web:de8528bcbc3d80c019c48f",
  measurementId: "G-GJT12HX5WB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const storage = getStorage(app);