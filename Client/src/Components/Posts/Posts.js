import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
const Posts = ({setCurrentId}) => {

    /*combine reducer posts to state*/
    const {posts,isLoading}  = useSelector((state) => state.posts);//[] -> {posts:[]}

    const classes = useStyles();

    if (!posts.length && !isLoading) return 'No Posts'
    return(
        /*!posts?.length*/ isLoading? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={12} md={4} lg={3}>
                            <Post post={post} setCurrentId = {setCurrentId}/>
                        </Grid>
                    ))
                }
            </Grid>
    ))
}

export default Posts;
