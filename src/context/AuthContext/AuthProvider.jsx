import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from './../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null);
    const[loading, setLoading] = useState(true);
    const createUser= (email,password,number,dateOfBirth)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password,number,dateOfBirth);
    }
    const authInfo={
      user,
      loading,
      createUser
    }
    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('state captured', currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;