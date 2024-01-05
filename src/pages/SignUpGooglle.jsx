import React from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { app } from "../firebase";

const auth = getAuth(app);
const googleprovider = new GoogleAuthProvider();

function SignUpGoolglle() {

    const signinwithgoogle = async (e) => {
        e.preventDefault();
         await signInWithPopup(auth, googleprovider).then(() => {
            alert('Sign in successfully');
        });
    }

    return (
        <>
        <div style={{marginLeft:"300px"}}>
        <button onClick={signinwithgoogle}>Sign In With Google</button>
        </div>
       
        </>
      
    );
}

export default SignUpGoolglle;
