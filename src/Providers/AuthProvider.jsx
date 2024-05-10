import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const authContext = createContext(null)
// components
const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)
     // loader
     
    // create user
    const gooleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const createGooleUser = () => {
        return signInWithPopup(auth, gooleProvider)
    }
    const createGithubUser = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // email password
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user
    const loginUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout user
    const logoutUser = (auth) => {
        setLoader(true)
        return signOut(auth)
    }





    useEffect(() => {
        const obseverId = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        });
        return (() => {
            obseverId()
        })

    }, [])

   
    console.log(user)
    const authInfo = { loader, setLoader, user, createUser, loginUser, logoutUser, createGooleUser, createGithubUser }
    
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node,
}