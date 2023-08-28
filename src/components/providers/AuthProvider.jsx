import React, { useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({ isLogeed: false, name: null})

    const login = () =>{
        setUser({ isLogeed: True, name: 'Ariel Medina'})
    }

    return (
        <AuthContext.Provider value={{
            user: user,
            login
        }}>
            {children}
        </AuthContext.Provider>
    );
}