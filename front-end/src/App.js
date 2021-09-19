import React, { useRef, useState } from 'react';
import './App.css';


import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import Search from './components/Search.js';
import BasicGrid from './components/BasicGrid';
import React from 'react';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup} from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';

const provider = new GoogleAuthProvider();

const firebaseConfig = {
  apiKey: "AIzaSyAscF9WCaJOV8hU6kzXcFugZSAIIrR1PQU",
  authDomain: "hackthenorth-326415.firebaseapp.com",
  projectId: "hackthenorth-326415",
  storageBucket: "hackthenorth-326415.appspot.com",
  messagingSenderId: "832600522932",
  appId: "1:832600522932:web:01cb0fae9cb8367eb617e1",
  measurementId: "G-G2NKFGG2M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize Authorization
const auth = getAuth();



class App extends React.Component {

    const [user] = useAuthState(auth);
  
    render() {
        return (
            <div className="App">
                <h1 className="text-center mb-4">Welcome :)</h1>
                <Search />
                <section>
                    {user ? <BasicGrid /> : <SignIn />}
                </section>
            </div>
      );
    } 
}

function SignIn() {

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // ...
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });;
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      </>
    )

}

function SignOut() {
return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
)
}


export default App;
