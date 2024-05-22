import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import app from '../Firebase/BaseFire'
const GoogleProvider = new GoogleAuthProvider();
const auth=getAuth(app)
export const AuthContext=createContext()
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUserWith=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const login=()=>{
        setLoading(true)
         return signOut(auth)
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,GoogleProvider)
    }
    const profileUpdate=(name,photo)=>{
        return updateProfile(
            auth.currentUser,{
                displayName:name,
                photoURL:photo,

            }
        )
    }
    const info={
         user,
         loading,
         createUserWith,
         signIn,
         login,
         googleSignIn,
         profileUpdate,
    }
    useEffect(()=>{

        const unSubscribe=onAuthStateChanged(auth,currentUser => {
            setUser(currentUser)
            console.log('User',currentUser)
            setLoading(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[])
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default Authprovider;