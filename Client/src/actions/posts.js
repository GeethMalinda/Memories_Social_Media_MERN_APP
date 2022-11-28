import * as api from '../api'
import {
    CREATE,
    DELETE,
    END_LOADING,
    FETCH_ALL,
    FETCH_BY_SEARCH, FETCH_POST,
    LIKE,
    START_LOADING,
    UPDATE
} from '../constants/actiontypes';

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

export const getPosts = (page) => async (dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchPosts(page);
        dispatch({
            type:FETCH_ALL,
            payload:data
        })

        dispatch({type:END_LOADING})

    }catch (e) {
        console.log('error ==> ',e.message);
    }
}

export const getPost = (id) => async (dispatch) => {

    try {
        dispatch({type:START_LOADING})

        const {data} = await api.fetchPost(id);
        console.log('post ==>',data);
        dispatch({ type: FETCH_POST, payload: { post: data } });
        dispatch({type:END_LOADING})


    }catch (e) {
        console.log('error ==> ',e.message);
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {

    try{
        dispatch({type:START_LOADING})

        const {data : {data}} = await api.fetchPostsBySearch(searchQuery);
        dispatch({
            type:FETCH_BY_SEARCH,
            payload: { data }
        })

        dispatch({type:END_LOADING})

    }catch (e) {
        console.log(e);
    }
}
export const createPost = (post,history) => async (dispatch) => {
    try {
        dispatch({type:START_LOADING})

        const {data} = await api.createPost(post);
        dispatch({
            type:CREATE,
            payload:data
        })

        dispatch({type:END_LOADING})
        history.push(`/posts/${data._id}`);
    }catch (e) {

        console.log(e.response.status);
        if (e.response.status === 401) {
            history.push(`/`);
        }
    }
}

export const updatePost = (id,post) => async (dispatch) => {

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
