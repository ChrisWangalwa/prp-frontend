// frontend/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDM9iJezoZ5KZMIURIU_6ideS2i-_3lkeQ",
  authDomain: "press-release-portal.firebaseapp.com",
  projectId: "press-release-portal",
  storageBucket: "press-release-portal.appspot.com",
  messagingSenderId: "299194408268",
  appId: "1:299194408268:web:36560a4ed8613c7cf9c3e9",
  measurementId: "G-7RT348QSWT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
