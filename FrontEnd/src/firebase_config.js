import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyC8N1IHD7FAbAwC8qyapAlB00u5u88AxF0",
    authDomain: "react-placement.firebaseapp.com",
    projectId: "react-placement",
    storageBucket: "react-placement.appspot.com",
    messagingSenderId: "292118116282",
    appId: "1:292118116282:web:9b3ab5e3dbd14ebbf10f83",
    measurementId: "G-R32Y6W24M9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);