// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCL1n0fbDrk0285ukYkW_DFrIl67-UTXs",
  authDomain: "online-edu-care-7b821.firebaseapp.com",
  projectId: "online-edu-care-7b821",
  storageBucket: "online-edu-care-7b821.appspot.com",
  messagingSenderId: "125267942133",
  appId: "1:125267942133:web:0788ec2b9716082ca703bc",
  measurementId: "G-0MN5LT1TJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;