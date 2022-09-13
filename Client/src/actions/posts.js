import * as api from '../api'

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
            type:'FETCH_ALL',
            payload:data
        })
    }catch (e) {
        console.log(e.message);
    }
}

export const createPost = () => async (dispatch) => {
    try {

        const {data} = await api.createPost();
        dispatch({
            type:'CREATE',
            payload:data
        })
        
    }catch (e) {
        console.log(e.message);
    }
}
