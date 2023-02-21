import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACR_APP_API_KEY,
  authDomain: process.env.REACR_APP_AUTH_DOMAIN,
  projectId: process.env.REACR_APP_PROJECT_ID,
  storageBucket: process.env.REACR_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACR_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACR_APP_APP_ID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyBxAO0LkmtCUZq7BNgj2vaVc92KQ0et2MY",
//   authDomain: "site-sale.firebaseapp.com",
//   projectId: "site-sale",
//   storageBucket: "site-sale.appspot.com",
//   messagingSenderId: "116593049959",
//   appId: "1:116593049959:web:22b269538580ed33f9efc2"
// };

const app = initializeApp(firebaseConfig);