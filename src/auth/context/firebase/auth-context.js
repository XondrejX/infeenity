'use client';

import { createContext, useState, useEffect } from 'react';
import { auth } from '../../firebaseConfig';  // Adjust the path if needed

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setCurrentUser);
    return () => unsubscribe();  // This ensures we unsubscribe from the listener when the component is unmounted
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
