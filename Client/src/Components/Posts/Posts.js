import React from 'react';
import Post from './Post/Post';
import useStyles from './Styles';
import {useSelector} from 'react-redux';
import {CircularProgress, Grid} from '@mui/material';
const Posts = () => {

    /*combine reducer posts to state*/
    const posts = useSelector((state => state.posts));
    const classes = useStyles();
    return(
        !posts.length ? <CircularProgress/>:
            <Grid container className={classes.mainContainer}  sx={{ alignItems:'stretch'}} spacing={2}>
                {
                    posts.map((post) => (
                        <Grid item key={post._id} xs={12} sm={6}>
                            <Post post={post}/>
                        </Grid>
                    ))
                }
            </Grid>
    )
}

export default Posts;
