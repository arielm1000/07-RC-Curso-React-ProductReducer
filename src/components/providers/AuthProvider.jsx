import React, { useReducer, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { authReducer } from '../../reducers/authReducer';
import {types} from '../../types/types';
const initialState = {
    isLogged: false,
    name: null
}

export const AuthProvider = ({children}) => {
    //esto lo reemplazo con el reducer
    //const [user, setUser] = useState({ isLogeed: false, name: null})
    const [state, dispatch] = useReducer(authReducer, initialState)

    const login = () => {
        //reemplazo con el reducer
        //setUser({ isLogeed: true, name: 'Ariel Medina'})
        dispatch({
            type: types.auth.loginType,
            payload: 'Ariel Medina'
        })
    }
    const logout = () => {
        dispatch({
            type: types.auth.logoutType
        })
    }

    return (
        <AuthContext.Provider value={{
            //user: user, esto reenplazo con state
            state,
            login,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    );
}