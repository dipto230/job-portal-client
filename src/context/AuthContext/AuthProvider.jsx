import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import auth from './../../firebase/firebase.init';



const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const db = getFirestore();

    // Create user and save additional data in Firestore
    const createUser = async (email, password, number, dateOfBirth) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { uid } = userCredential.user;
            await setDoc(doc(db, "users", uid), {
                phone: number,
                dateOfBirth: dateOfBirth,
            });
            return userCredential;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    };

    // Sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
     const signOutUser =()=>{
        setLoading(true);
        return signOut(auth);
     }

     const signInWithGoogle = ()=>{
        setLoading(true);
          return signInWithPopup(auth , googleProvider)
      }


    // Observe auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("Auth state changed:", currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signInWithGoogle,
        signOutUser
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
