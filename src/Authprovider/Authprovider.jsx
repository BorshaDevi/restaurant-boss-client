import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import  { createContext, useEffect, useState } from 'react';
import app from '../Firebase/BaseFire'
import useAxiosPublic from '../Hook/useAxiosPublic';
const GoogleProvider = new GoogleAuthProvider();
const auth=getAuth(app)
export const AuthContext=createContext()
const Authprovider = ({children}) => {
    const [user,setUser]=useState(null)
    
    const axiosUrl=useAxiosPublic()

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
            if(currentUser){
               axiosUrl.post('/jwt',{email:currentUser?.email})
               .then(res => {
                console.log(res.data)
                if(res.data.token){
                    localStorage.setItem('token',res.data.token)
                }
               
               })
            }
            else{
                localStorage.removeItem('token')
            }
          
            setLoading(false)
        })
        return ()=>{
            return unSubscribe()
        }
    },[axiosUrl])
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default Authprovider;