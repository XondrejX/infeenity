

import React, { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { auth } from './firebaseConfig';  // Adjust the path if needed

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setCurrentUser);
    return () => unsubscribe();  // This ensures we unsubscribe from the listener when the component is unmounted
  }, []);

  const value = useMemo(() => ({ currentUser }), [currentUser]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
};
