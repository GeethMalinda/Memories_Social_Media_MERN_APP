import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signIn = (formdata,navigate) => async (dispatch)=> {
    try {
        navigate('/')
    }catch (e) {
        console.log(e);
    };
}

export const signUp = (formdata,navigate) => async (dispatch)=> {
    try {
        navigate('/')
    }catch (e) {
        console.log(e);
    };
}
