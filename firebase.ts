

// // Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCL6gCVmblHgQPkxq-XKR0E6NTx7zi5uE8",
    authDomain: "netflix-clone-738c7.firebaseapp.com",
    projectId: "netflix-clone-738c7",
    storageBucket: "netflix-clone-738c7.appspot.com",
    messagingSenderId: "15731988380",
    appId: "1:15731988380:web:9d6765d5f31f62367d9a59"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }