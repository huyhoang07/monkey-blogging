import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase-app/firebase-config";

const AuthContext = createContext();
function AuthProvider(props) {
    const [userInfo, setUserInfo] = useState({});
    const value = {userInfo, setUserInfo};
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // console.log(user);
            setUserInfo(user);
        })
    }, [])
    return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}

function useAuth() {
    const context = useContext(AuthContext);
    if (typeof context === 'undefined')
        throw new Error ('useAuth must be within AuthProvider');
    return context;
}

export {AuthProvider, useAuth};