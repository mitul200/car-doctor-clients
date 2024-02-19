// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-VxwTjAjD6kaxN2zB8y9RGm_1s0DMfFM",
  authDomain: "car-doctor-63a96.firebaseapp.com",
  projectId: "car-doctor-63a96",
  storageBucket: "car-doctor-63a96.appspot.com",
  messagingSenderId: "346216132448",
  appId: "1:346216132448:web:5bd9e95d8945ff89b63805"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app