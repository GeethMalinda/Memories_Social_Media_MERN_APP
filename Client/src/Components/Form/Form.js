import React, {useEffect, useState} from 'react';
import {Button, Paper, TextField, Typography} from '@mui/material';
import useStyles from './Styles';
import FileBase from 'react-file-base64';
import {useDispatch,useSelector} from 'react-redux';
import {createPost,updatePost} from '../../actions/posts';

const Form = ({currentId,setCurrentId}) => {
    const classes = useStyles();
    const post = useSelector((state) => currentId ? state.posts.find((p)=>p._id === currentId):null);
    const dispatch  =  useDispatch();
    const [postData , setPostData] = useState({
        creator:'',
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

        if (currentId) {
            dispatch(updatePost(currentId,postData))
            clear();
        }else {
            dispatch(createPost(postData))
            clear();
        }
    }

    const clear = () => {
        setCurrentId(null)
        setPostData({creator:'', title:'', message:'', tags:'', selectedFile:''})
    }

    return(
        <Paper  className={classes.paper}>
            <form autoComplete="off"
                  noValidate className={`${classes.root} ${classes.form}`}
                  onSubmit={handleSubmit}>

            <Typography variant= 'h6'>
                    {currentId ? 'Editing':'Creating'} a Memory
                </Typography>
                <TextField
                    name='creator'
                    variant='outlined'
                    label='Creator'
                    fullWidth
                    value={postData.creator}
                    onChange={handleChange}
                />
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
