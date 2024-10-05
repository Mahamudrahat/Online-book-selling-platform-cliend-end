import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile,GoogleAuthProvider } from "firebase/auth";

import app from '../../public/firebase/firebase.config';


export const AuthContext=createContext(null);

export default function AuthProvider({children}) {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const [user,setUser]=useState([]);
    const [loading, setLoading] = useState(true);
    
    const loginWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile=(profileInfo)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,profileInfo);
    }
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log()
            setLoading(false);
        });
        return ()=>{unsubscribe()};
    })

    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        loginWithGoogle
    }


  return (
    <>
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
