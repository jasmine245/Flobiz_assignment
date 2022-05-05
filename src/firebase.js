import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBHNTQ7H3RNkORzKzcm6X8svoKcr_seOTI",
    authDomain: "phone-auth-f50aa.firebaseapp.com",
    projectId: "phone-auth-f50aa",
    storageBucket: "phone-auth-f50aa.appspot.com",
    messagingSenderId: "556643494648",
    appId: "1:556643494648:web:123019dd09bd75ae50290d"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;