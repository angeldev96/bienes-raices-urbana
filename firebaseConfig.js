
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// Configuración de Firebase
const firebaseConfig = {

  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  
  projectId: import.meta.env.VITE_PROJECT_ID,
   
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,

  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,

  appId: import.meta.env.VITE_APP_ID,
   
  measurementId: import.meta.env.VITE_MEASUREMENT_ID

}

// Inicializamos Firebase
initializeApp(firebaseConfig)

// Inicializamos Firebase Auth
const auth = getAuth()

export { auth }  
