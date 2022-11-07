import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAJeEVIoN8zstcmELH_t7TD6xJSN-JNanM",
    authDomain: "llantenalmacen.firebaseapp.com",
    databaseURL: "https://llantenalmacen-default-rtdb.firebaseio.com",
    projectId: "llantenalmacen",
    storageBucket: "llantenalmacen.appspot.com",
    messagingSenderId: "766933591552",
    appId: "1:766933591552:web:784af99cd46c1b28e49ae5",
    measurementId: "G-11K5BT9H7E"
  };

  const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
