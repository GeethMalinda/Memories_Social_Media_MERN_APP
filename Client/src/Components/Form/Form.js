import React, {useEffect, useState} from 'react';
import {Button, Paper, TextField, Typography} from '@mui/material';
import useStyles from './Styles';
import FileBase from 'react-file-base64';
import {useDispatch,useSelector} from 'react-redux';
import {createPost, getPosts, updatePost} from '../../actions/posts';
import { useHistory } from 'react-router-dom';

const Form = ({page,currentId,setCurrentId}) => {
    const history = useHistory();
    const classes = useStyles();
    const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));
    const dispatch  =  useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [postData , setPostData] = useState({
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    })

    useEffect(() => {
        if (post) setPostData(post)

    },[post])
    const handleChange = (evt) => {
        const value = evt.target.value;
        setPostData({
            ...postData,
            [evt.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId === 0) {
            // dispatch(updatePost(currentId,postData))
            dispatch(createPost({ ...postData, name: user?.result?.name },history));
            dispatch(getPosts(page))
            clear();
        } else {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        }
    }

    const clear = () => {
        setCurrentId(0);
        setPostData({ title:'', message:'', tags:'', selectedFile:''})
    }

    if (!user?.result?.name){
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own memories and like other's memories.
                </Typography>
            </Paper>
        )
    }
    return(
        <Paper  className={classes.paper} elevation={6}>
            <form autoComplete="off"
                  noValidate className={`${classes.root} ${classes.form}`}
                  onSubmit={handleSubmit}>

            <Typography variant= 'h6'>
                    {currentId ? 'Editing':'Creating'} a Memory
                </Typography>

                <TextField
                    name='title'
                    variant='outlined'
                    label='Title'
                    fullWidth
                    value={postData.title}
                    onChange={handleChange}
                />
                <TextField
                    name='message'
                    variant='outlined'
                    label='Message'
                    fullWidth
                    value={postData.message}
                    onChange={handleChange}
                />
                <TextField
                    name='tags'
                    variant='outlined'
                    label='Tags'
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => {
                        setPostData({...postData,tags: e.target.value.split(',')})
                    }}
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: 1, margin: 1 }}
                    size="large"
                    type="submit" fullWidth>
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    sx={{padding: 1, margin: 1 }}
                    size="large"
                    onClick={clear}
                    fullWidth>
                    Clear
                </Button>

            </form>
        </Paper>
    )
}

export default Form;
