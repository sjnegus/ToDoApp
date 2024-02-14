// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKs_4mc6Dp5IOcCt06Foa3umVBP7gSgao",
  authDomain: "todo-react-af512.firebaseapp.com",
  projectId: "todo-react-af512",
  storageBucket: "todo-react-af512.appspot.com",
  messagingSenderId: "836571590709",
  appId: "1:836571590709:web:94edd38488ca91de4cc17c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}