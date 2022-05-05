import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import {auth} from "../firebase";
import { createContext, useContext } from "react";

const UserAuthContext = createContext();

 export function setUpRecaptcha(number){
        const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',
        {},
        auth);
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }


export function useUserAuth(){
    return useContext(UserAuthContext);
}

 