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
const [user] = useAuthState(auth);

function App () {
    return (
        <div className="App">
            <h1 className="text-center mb-4">Welcome :)</h1>
            <Search />
            <section>
                {user ? <BasicGrid /> : <SignIn />}
            </section>
            <BasicGrid />
        </div>
    );
}

export default App;
