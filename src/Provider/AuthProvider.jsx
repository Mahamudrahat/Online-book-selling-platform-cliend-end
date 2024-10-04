import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import app from '../../public/firebase/firebase.config';

export const AuthContext=createContext(null);

export default function AuthProvider({children}) {
    const auth = getAuth(app);
    const [user,setUser]=useState([]);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        return signOut(auth);
    }

    const updateUserProfile=(profileInfo)=>{
        return updateProfile(auth.currentUser,profileInfo);
    }
    
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            console.log()
        });
        return ()=>{unsubscribe()};
    })

    const authInfo={
        user,
        createUser,
        loginUser,
        logOut,
        updateUserProfile
    }


  return (
    <>
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
