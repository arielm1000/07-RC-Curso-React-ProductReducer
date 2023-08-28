import React from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const AuthProvider = ({children}) => {
    const user = { 
        isLogged: false,
        name: null
    }

    return (
        <AuthContext.Provider value={{
            user: user
        }}>
            {children}
        </AuthContext.Provider>
    );
}