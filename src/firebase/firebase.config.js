// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// import.meta.env.VITE_apiKey
const firebaseConfig = {
  apiKey: "AIzaSyD5UIn4Ck4RETbTYZtW43ePWMu-2C68U5Y",
  authDomain: "vocab-master-client.firebaseapp.com",
  projectId: "vocab-master-client",
  storageBucket: "vocab-master-client.appspot.com",
  messagingSenderId: "265796910118",
  appId: "1:265796910118:web:844d4610562ebdab00bae7",
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
