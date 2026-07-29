import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATjmD-6MTCAoYz4lM_pD9pLeKzLQF0nBw",
  authDomain: "hero-homes-lucknow.firebaseapp.com",
  projectId: "hero-homes-lucknow",
  storageBucket: "hero-homes-lucknow.firebasestorage.app",
  messagingSenderId: "321993809054",
  appId: "1:321993809054:web:9923eee1812b663067ef8f",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

export const db = getFirestore(app);