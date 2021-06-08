 import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useState, useEffect } from 'react';

const uiConfig = {
    signInFlow: 'popup',
    // display email and google account options for sign up
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: true
        },
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    credentialHelper: 'none',
    callbacks: {
        // Avoid redirects after signing in.
        signInSuccessWithAuthResult: () => false
    },
};

export function RenderLogin() {
    const [user, setUser] = useState(undefined);
    const handleLogout = () => {
       firebase.auth().signOut();
    };

    useEffect(() => {
        // checks if a user is logged in or not
        const authUnregisterFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        })
        return function cleanup() {
            authUnregisterFunction();
        }
    }, [])

    // renders an UI to let the users to sign in and out
    if (!user) {
        return (
            <div className="signin">
                <h2>LOGIN</h2>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </div>
        );
    } else {
        return (
            <div className="signout">
                <h2>Logged in as {user.displayName}</h2>
                <button onClick={handleLogout}>Sign Out</button>
            </div>
        );
    }
}

