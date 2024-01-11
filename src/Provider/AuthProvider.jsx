import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "./Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser= ( email, Password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, Password)
    }

    const signIn = ( email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password)
    }

    const handleUpdateProfile = (name, photoURL) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const googleLogin = (name, email) =>{
        return signInWithPopup(auth, googleProvider);
    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        });
        return () =>{
            return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        setLoading,
        loading,
        createUser,
        signIn,
        logOut,
        handleUpdateProfile,
        googleLogin ,


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;