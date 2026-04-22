import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
   apiKey: "AIzaSyAN8MPGos4pngZI_PjQOU1iqWeA9jOZqbY",
  authDomain: "contact-book-ccd35.firebaseapp.com",
  projectId: "contact-book-ccd35",
  storageBucket: "contact-book-ccd35.firebasestorage.app",
  messagingSenderId: "814057591572",
  appId: "1:814057591572:web:41a33abaacca55d3566801"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)