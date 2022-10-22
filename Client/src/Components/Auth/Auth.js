import React, {useEffect, useState} from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@mui/material';
import useStyles from './styles';
import {LockOutlined} from '@mui/icons-material';
import Input from './Input';
import Icon from './icon';
import GoogleLogin from 'react-google-login';
import { gapi } from "gapi-script";
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {AUTH} from '../../constants/actiontypes';
import { signIn, signUp } from '../../actions/auth';

const innitialState = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    confirmPassword:''
}
const Auth = () => {
    const classes = useStyles();
    const [showPassword , setShowPassward] = useState(false)
    const [formData , setFormData] = useState(innitialState)
    const [isSignUp,setIsSignUp] = useState(false);
    const  dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            dispatch(signUp(formData,navigate))
        }else {
            dispatch(signIn(formData,navigate))

        }


    }
    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


    const handleShowPassword = () => {
        setShowPassward(prevState => !prevState)

    }

    const switchMode = () => {
        setIsSignUp(prevState => !prevState)
        setShowPassward(false)
    }

    const googleSuccess = async (res) => {
        console.log(res);
        const result = res?.profileObj;
        const token = res?.tokenId;
        
        try {
            dispatch({
                type:AUTH,
                data:{
                    result,
                    token
                }
            })
            navigate('/')
        }catch (e) {
            console.log(e);
        }
    }

    const googleError = async (e) => {
        // alert('Google Sign In was unsuccessful. Try again later');
        alert(e);
        console.log(e);
    }
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId:"356994902427-231lrbdsshvj4gcdh9psj93aql98c20c.apps.googleusercontent.com",
                scope: '',
            });
        }

        gapi.load('client:auth2', start);
    }, []);

    return (
        <Container component="main"  maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography variant="h5">
                    {isSignUp ? 'Sign Up':'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    {/*only is signUp*/}
                    <Grid container spacing={2}>
                        {isSignUp && (
                                <>
                                    <Input
                                        name="firstName"
                                        label="First Name"
                                        handleChange={handleChange}
                                        autoFocus
                                        half />
                                    <Input
                                        name="lastName"
                                        label="Last Name"
                                        handleChange={handleChange}
                                        half />
                                </>
                            )}
                        <Input
                            name="email"
                            label="Email Address"
                            handleChange={handleChange}
                            type="email" />

                        <Input name="password"
                               label="Password"
                               handleChange={handleChange}
                               type={showPassword ? 'text' : 'password'}
                               handleShowPassword={handleShowPassword} />

                        { isSignUp &&
                        <Input
                            name="confirmPassword"
                            label="Repeat Password"
                            handleChange={handleChange}
                            type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up ':'Sign In '}
                    </Button>


                    <GoogleLogin
                        clientId="356994902427-231lrbdsshvj4gcdh9psj93aql98c20c.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    startIcon={<Icon />} variant="contained">
                                Google Sign In
                            </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />

                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an acount Sign In':"Don' t have an account ? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>

                </form>

            </Paper>
        </Container>
    )
}
export default Auth
