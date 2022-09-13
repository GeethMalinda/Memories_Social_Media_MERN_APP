import React from 'react';
import Post from './Post/Post';
// import useStyles from './Styles';
import {useSelector} from 'react-redux';
const Posts = () => {
    // const classes = useStyles();

    /*combine reducer posts to state*/
    const posts = useSelector((state) => state.posts)
    return(
        <>
            <h1>POSTS</h1>
            <Post/>
            <Post/>
        </>
    )
}

export default Posts;
