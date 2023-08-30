import React from 'react';
import {types} from '../types/types';

export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.auth.loginType:
            return {
                ...state, 
                isLogged: true,
                name: action.payload
            }
        case types.auth.logoutType:
            return {
                isLogged: false,
                name: null
            }
        default:
            return state;
    }
}