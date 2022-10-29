import * as api from '../api/index.js';
import {AUTH} from '../constants/actiontypes';

export const signIn = (formdata,navigate) => async (dispatch)=> {
    try {
        const {data} = await api.signIn(formdata);
        dispatch({
            type:AUTH,
            data
        })
        navigate('/')
    }catch (e) {
        console.log(e);
    };
}

export const signUp = (formdata,navigate) => async (dispatch)=> {
    try {
        const {data} = await api.signUp(formdata);
        dispatch({
            type:AUTH,
            data
        })
        console.log('data==>',data.response)
        console.log('navigate',navigate);
        navigate('/auth')
    }catch (e) {
        alert(e.response.data.message)
        console.log('catch==>',e);
    };
}
