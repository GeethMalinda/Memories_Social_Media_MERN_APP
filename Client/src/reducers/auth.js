import {AUTH, LOGOUT} from '../constants/actiontypes';

const authReducer = (state = {authData:null}, action) => {
    switch (action.type){
        case AUTH:
            console.log("reducer action data auth ==>",action?.data);
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            return {...state,authData: action?.data}
        case LOGOUT:
            localStorage.clear();
            console.log("reducer action data logout ==>",action?.data);
            return {...state,authData:null}

        default:
            return state
    }
}

export default authReducer;
