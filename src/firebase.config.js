
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyBBt7lmdysr8oH64zbF84zqq61Zy8B5LWU",
  authDomain: "college-connect-81684.firebaseapp.com",
  databaseURL: "https://college-connect-81684-default-rtdb.firebaseio.com",
  projectId: "college-connect-81684",
  storageBucket: "college-connect-81684.appspot.com",
  messagingSenderId: "459485739269",
  appId: "1:459485739269:web:8374b782528ca49bf4df6c"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };