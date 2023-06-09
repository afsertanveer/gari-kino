import React, { Children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import app from './../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(null);
    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password);
    }
    const signin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
        })
        return()=>{
            return unsubscribe();
        }
    },[])
    const authInfo={
        user,
        loading,
        createUser,
        signin,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;