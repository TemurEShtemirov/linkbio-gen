import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    useEffect(() => onAuthStateChanged(auth, u => setUser(u)), []);
    return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>