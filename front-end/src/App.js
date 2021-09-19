import Search from './components/Search.js';
import './App.css';

import BasicGrid from './components/BasicGrid';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
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

function App () {

    const [user] = useAuthState(auth);

    return (
        <div className="App">
 
            <h1 className="welcome">Welcome to iDash</h1>
            <SignOut />
            <Search />
            <section>
                {user ? <BasicGrid /> : <SignIn />}
            </section>
        </div>
    );
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
