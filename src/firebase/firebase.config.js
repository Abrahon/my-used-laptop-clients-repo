// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOW9ifeUA6ea_9PmfpH6BqziltiJ6Lt-0",
  authDomain: "used-laptop-products.firebaseapp.com",
  projectId: "used-laptop-products",
  storageBucket: "used-laptop-products.appspot.com",
  messagingSenderId: "120258042275",
  appId: "1:120258042275:web:b7f9c118320d94c6c36216"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app