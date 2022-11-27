import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { set } from 'react-hook-form';



export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

   
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signInWithGoogle = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
    const updateUser = (userInfo)=>{
        return updateProfile(user,userInfo)

    }
    const logOut = ()=>{
        return signOut(auth);
    }
    useEffect(()=>{ 
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser);

        })
        return () => unsubscribe();
    },[])
    const authInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        user,
        signInWithGoogle,
    } 
    
     return (
        <AuthContext.Provider value ={authInfo}>
            {children}
            
         </AuthContext.Provider>
       
    );
};

export default AuthProvider;