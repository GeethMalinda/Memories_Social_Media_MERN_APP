import React, {useEffect, useState} from 'react';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@mui/material';
import memories from '../../images/memories.png';
import useStyles from './style';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../constants/actiontypes';


const Navbar = () => {
    const classes = useStyles();
    const dispatch= useDispatch();
    const navigate = useNavigate();


    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    // useEffect(() => {
    //     const token = user?.token;
    //
    // },[JSON.parse(localStorage.getItem('profile'))])

    console.log(user);
    const logout = () => {
        dispatch({
            type:LOGOUT,
        })
        navigate('/auth')
        setUser(null)
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Nostalgia</Typography>
                <img className={classes.image} src={memories} alt="icon" height="60" />
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                                <Button onClick={logout} variant="contained" color="secondary">Logout</Button>
                            </div>
                        )
                        :(
                            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                        )
                }
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
