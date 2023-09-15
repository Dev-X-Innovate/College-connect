
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyCLMBBIs6VbTl-fRFtm06GJmxD6NUoYahk",
  authDomain: "foodorderingapp-e00ab.firebaseapp.com",
  databaseURL: "https://foodorderingapp-e00ab-default-rtdb.firebaseio.com",
  projectId: "foodorderingapp-e00ab",
  storageBucket: "foodorderingapp-e00ab.appspot.com",
  messagingSenderId: "228248856723",
  appId: "1:228248856723:web:4838cccfb098874a1e8566",
  measurementId: "G-7HR1SCG2M7"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };