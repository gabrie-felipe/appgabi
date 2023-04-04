
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCiyWhzuB0lGrWgw9iU1LZQGc51TNLfmbc",
  authDomain: "appgabi-8964c.firebaseapp.com",
  projectId: "appgabi-8964c",
  storageBucket: "appgabi-8964c.appspot.com",
  messagingSenderId: "323092965231",
  appId: "1:323092965231:web:230238544c9d670738aa9a"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export default { app, auth, db };
