import React from 'react';
import {types} from '../types/types';

export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.auth.loginType:
            return {
                isLogged: true,
                name: action.payload
            }
        default:
            return state;
    }
}