// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/firebase.config";
// import { useSearchParams } from "react-router-dom";

export const AuthContext = createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const creatUser =(email , password )=>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth,email,password)

  }

  const singIn =(email , password)=>{
    setLoding(true)
    return signInWithEmailAndPassword(auth ,email, password)
  }

  useEffect(()=>{
   const unsubcribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser)
        console.log('current user',currentUser);
        setLoding(false)
    })
    return ()=> {
        return unsubcribe
    }
  },[])

  const authInfo = {
    user,
    creatUser,
    singIn,
    loding,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
