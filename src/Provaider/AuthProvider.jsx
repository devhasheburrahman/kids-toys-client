import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import app from '../../public/Firebase/firebase.config';

const auth = getAuth(app);



export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const goggleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, goggleProvider);
    };

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            // console.log('current User', currentUser);
            // setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        handleGoogleSignIn,
        logOut


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;