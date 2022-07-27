import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCxsb7napx7Gh9rJEnJdyXsdx0ugvnMr0M",
  authDomain: "hackathon-code-for-good.firebaseapp.com",
  projectId: "hackathon-code-for-good",
  databaseURL: "https://hackathon-code-for-good-default-rtdb.firebaseio.com/",
  storageBucket: "hackathon-code-for-good.appspot.com",
  messagingSenderId: "1063514539334",
  appId: "1:1063514539334:web:b3b8ef8e4304c03e349147",
  measurementId: "G-E866MLJLD5",
};

initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

export { auth, db };
