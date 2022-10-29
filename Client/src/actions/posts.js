import * as api from '../api'
import {CREATE, DELETE, FETCH_ALL, LIKE, UPDATE} from '../constants/actiontypes';

/*
 Action Creators are funtions that returns funtions
*/

// const getPosts = () => {
//     const action = {type:'FETCH_ALL',payload:[]}
//     return action
//
// }

/*
redux thnunk
redux thunk allows us to specify additional arrow funtion
since we have been dealing with asyncronus logic we have to
add this async dispatch function infornt of it and then insted of
returning the funtion we have to dispatch it
 */

export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        dispatch({
            type:FETCH_ALL,
            payload:data
        })
    }catch (e) {
        console.log(e.message);
    }
}

export const createPost = (post,navigate) => async (dispatch) => {
    console.log("PostData ==>",post);
    try {

        const {data} = await api.createPost(post);
        dispatch({
            type:CREATE,
            payload:data
        })
        
    }catch (e) {

        console.log(e.response.status);
        if (e.response.status === 401) {
            console.log('if');
            navigate('/')
        }
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    console.log("update ==>",id);
    try {
        let {data} = await api.updatePost(id,post);
        dispatch({
            type:UPDATE,
            payload:data
        })
    }catch (e){
        console.log(e);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({
            type:DELETE,
            payload:id
        })
    }catch (e){
        console.log(e.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);
        dispatch({
            type:LIKE,
            payload:data
        })
    }catch (e) {
        console.log(e.message);

    }
}
