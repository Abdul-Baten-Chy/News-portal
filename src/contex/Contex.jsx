import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.config";
export const MyContex =createContext(null);


const Contex = ({children }) => {
    const [user, setUser]= useState('');
    const [loading,setLoading]=useState(true);
   const auth = getAuth(app);

    const createUser=(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
       
    }

    const signIn =(email, password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    const logOut=()=>{
       
        signOut(auth)
        .then()
        .catch(err=>{
            console.log(err);
        })
        }
    

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log(currentUser);

        });
        return ()=>{
            unSubscribe();}
    },[])
    const authInfo={user, createUser, signIn,logOut,loading}
   return (
        <div>
            <MyContex.Provider value={authInfo}>
                {children}
            </MyContex.Provider>
        </div>
    );
};

export default Contex;