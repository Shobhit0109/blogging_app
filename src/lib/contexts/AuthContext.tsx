"use client";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext<any>(null);

export default function AuthContextProvider({ children }: any) {
  const [user, SetUser] = useState<any>(null);
  const [loading, SetLoading] = useState<boolean>(false);
  const [error, SetError] = useState<string | null>(null);

  useEffect(() => {
    SetLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      SetUser(user || null);
      SetLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
    } catch (error: unknown) {
      SetError((error as Error)?.message);
    }
  };

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error: unknown) {
      SetError((error as Error)?.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        handleSignInWithGoogle,
        handleLogOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
