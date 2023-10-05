import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.config";
import PropTypes from 'prop-types';

export const MyContex =createContext(null);

const Contex = ({children }) => {
    const [user, setUser]= useState('');
   
   const auth = getAuth(app);

    const createUser=(email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(err=>{
            console.log(err);
        })
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
            console.log(currentUser);
        });
        return ()=>{
            unSubscribe();}
    },[])
    const authInfo={user, createUser, signIn,logOut}
   return (
        <div>
            <MyContex.Provider value={authInfo}>
                {children}children 
            </MyContex.Provider>
        </div>
    );
};
// MyContex.propTypes = {
//     PropTypes.node}
export default Contex;