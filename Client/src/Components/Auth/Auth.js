import React, { useState } from 'react';
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@mui/material';
import useStyles from './styles';
import {LockOutlined} from '@mui/icons-material';
import Input from './Input';

const Auth = () => {
    const classes = useStyles();
    const [showPassword , setShowPassward] = useState(false)
    const [isSignUp,setIsSignUp] = useState(false);
    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => {
        setShowPassward(prevState => !prevState)

    }

    const switchMode = () => {
        setIsSignUp(prevState => !prevState)
        setShowPassward(false)
    }
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
                </form>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                    {isSignUp ? 'Sign Up ':'Sign In '}
                </Button>
                <Grid container justify="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignUp ? 'Already have an acount Sign In':"Don' t have an account ? Sign Up"}
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}
export default Auth
