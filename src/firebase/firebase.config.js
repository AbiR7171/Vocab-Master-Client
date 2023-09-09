// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import.meta.env.VITE_apiKey
const firebaseConfig = {
  apiKey: "AIzaSyA0B-WlRQFFTUYAw_aCCdsvEGQB6pwB0AQ",
  authDomain: "vocab-master-af25f.firebaseapp.com",
  projectId: "vocab-master-af25f",
  storageBucket: "vocab-master-af25f.appspot.com",
  messagingSenderId: "878922724755",
  appId: "1:878922724755:web:b8cbf15317cb4c7356a466"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


// apiKey: import.meta.env.VITE_apiKey,
// authDomain: import.meta.env.VITE_authDomain,
// projectId: import.meta.env.VITE_projectId,
// storageBucket: import.meta.env.VITE_storageBucket,
// messagingSenderId: import.meta.env.VITE_messagingSenderId,
// appId: import.meta.env.VITE_appId
