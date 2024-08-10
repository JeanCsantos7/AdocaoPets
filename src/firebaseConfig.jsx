import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKIHcD0ZUwmZaqjql_iSkPghkSs_VAetE",
  authDomain: "projetodogs-e0f1a.firebaseapp.com",
  projectId: "projetodogs-e0f1a",
  storageBucket: "projetodogs-e0f1a.appspot.com",
  messagingSenderId: "68157495748",
  appId: "1:68157495748:web:75aa42544c5f7575392c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const auth2 = getAuth(app)
const storage = getStorage(app)


export {db}
export {auth}
export {auth2}
export {storage}