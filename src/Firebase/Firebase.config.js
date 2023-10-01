// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd-kw4F5G21g8T37-yht5z-218RrgD0uI",
  authDomain: "fir-test-3-jpck.firebaseapp.com",
  projectId: "fir-test-3-jpck",
  storageBucket: "fir-test-3-jpck.appspot.com",
  messagingSenderId: "378965296606",
  appId: "1:378965296606:web:67aeb8f494779d3c3a494f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
