import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ-Wpl8SRN58pz6WJA-qhsJHUYigU6i2c",
    authDomain: "my-app-auth-103b8.firebaseapp.com",
    projectId: "my-app-auth-103b8",
    storageBucket: "my-app-auth-103b8.appspot.com",
    messagingSenderId: "681094393379",
    appId: "1:681094393379:web:dc6678e6cab693e0538b96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };

