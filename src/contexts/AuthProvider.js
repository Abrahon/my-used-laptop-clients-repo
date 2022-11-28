import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { set } from 'react-hook-form';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

   
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const updateUser = (userInfo)=>{
        return updateProfile(auth.currentUser, userInfo)

    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{ 
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);
            setLoading(false);

        })
        return () => unsubscribe();
    },[])
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        loading,
        signInWithGoogle,
    } 
    
     return (
        <AuthContext.Provider value ={authInfo}>
            {children}
            
         </AuthContext.Provider>
       
    );
};

export default AuthProvider;