import React, {useState} from 'react';
import {Button, Paper, TextField, Typography} from '@mui/material';
import useStyles from './Styles';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts';

const Form = () => {
    const classes = useStyles();
    const dispatch  =  useDispatch();
    const [postData , setPostData] = useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    })
    const handleChange = (evt) => {
        const value = evt.target.value;
        setPostData({
            ...postData,
            [evt.target.name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData))
    }
    return(
        <Paper sx={{m:6 ,p:3 ,mt:'unset'}}>
            <form
                autoComplete='off'
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant= 'h6'>
                    Creating A Memory
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
                    onChange={handleChange}
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
                    onClick={() => console.log('clear')}
                    fullWidth>
                    Clear
                </Button>

            </form>
        </Paper>
    )
}

export default Form;
