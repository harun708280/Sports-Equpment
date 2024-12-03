import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "./init";

export const UserAuthContext = createContext(null);
const GoogleProvider=new GoogleAuthProvider()
const Authentication = ({ children }) => {
    
    const name='Harun'
    const [user,setUser]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    console.log(user);
    console.log(isLoading);
    
    

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setIsLoading(false)
        })

        return ()=>{
            unsubscribe()
        }


    },[])

    const CreateAccount=(email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    const Login=(email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const Logout=()=>{
        return signOut(auth)
    }

    const LoginGoogle=()=>{

        setIsLoading(true)
        return signInWithPopup(auth,GoogleProvider)

    }

    const info={
        name,
        user,
        Login,
        Logout,
        CreateAccount,
        LoginGoogle,
        isLoading,

    }
  return (
    
      <UserAuthContext.Provider value={info}>{children}</UserAuthContext.Provider>
    
  );
};

export default Authentication;
