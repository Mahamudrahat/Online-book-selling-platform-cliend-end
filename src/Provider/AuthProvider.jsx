import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile,GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

import app from '../../public/firebase/firebase.config';


export const AuthContext=createContext(null);

export default function AuthProvider({children}) {
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();
    const auth = getAuth(app);
    const [user,setUser]=useState([]);
    const [loading, setLoading] = useState(true);
    
    const loginWithGitHub=()=>{
        setLoading(true);
        return signInWithPopup(auth,gitHubProvider);
    }
    
    const loginWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const createUser=async (email,password,name,photo)=>{
        //setLoading(true);
        try{
            const userCredential= await createUserWithEmailAndPassword(auth,email,password);
            console.log(userCredential);
            const newUser = userCredential.user;
            const response=await fetch('http://localhost:5000/users',{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    uid: newUser.uid,
                   email: newUser.email,
                  displayName: name || "User",
                 photoUrl: photo || "https://i.ibb.co/k6hTYW1/Alien-Dev.jpg"
                })  
            })
            if (!response.ok) {
                throw new Error("Failed to register user data.");
              }
              return newUser;

        }catch(error){
            console.log("Registration failed:", error.message);
            throw error;

        }
        //return createUserWithEmailAndPassword(auth,email,password)
        
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
        const unsubscribe=onAuthStateChanged(auth,async (currentUser)=>{
            //setUser(currentUser);
            if(currentUser){
                try{
                    const res=await fetch(`http://localhost:5000/users/${currentUser.uid}`);
                    if(!res.ok){
                        throw new Error("Failed to fetch user data.");
                    }
                    const data = await res.json();
                    setUser(data);
                    setLoading(false);

                }catch(error){
                    console.error("Error fetching user data:", error.message);
                }
            }else{
                setUser(null);
            }

            console.log()
            setLoading(false);
        });
        return ()=>{unsubscribe()};
    },[auth]);

    const authInfo={
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        updateUserProfile,
        loginWithGoogle,
        loginWithGitHub
    }


  return (
    <>
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    </>
  )
}
