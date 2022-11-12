import React, {useEffect, useState} from 'react';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@mui/material';
import memories from '../../images/memoriesLogo.png';
import memoriesText from '../../images/download.png';
import useStyles from './style';
import {Link, useLocation, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../constants/actiontypes';
import decode from 'jwt-decode';


const Navbar = () => {
    const classes = useStyles();
    const dispatch= useDispatch();
    const history = useHistory();
    const location = useLocation();


    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(() => {
        const token = user?.token

        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000  < new Date().getTime()) logout()
        }
        setUser(JSON.parse(localStorage.getItem('profile')))

    },[location])

    const logout = () => {
        dispatch({
            type:LOGOUT,
        })
        history.push('/auth')
        setUser(null)
    }
    const navigateToAuth = () => {
        history.push('/auth')
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>

                {/*<Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Nostalgia</Typography>*/}

                <Link to="/" className={classes.brandContainer}>
                    <img src={memoriesText} alt="icon" height="40px" />
                    <img src={memories} alt="icon" height="40px" />
                </Link>

            </div>
            <Toolbar  className={classes.toolbar}>
                {
                    user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name?.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                                <Button onClick={logout} variant="contained" color="secondary">Logout</Button>
                            </div>
                        )
                        :(
                            <Button onClick={navigateToAuth} /*component={Link} to="/auth"*/ variant="contained" color="primary">Sign In</Button>
                        )
                }
            </Toolbar>
        </AppBar>
    );
};
export default Navbar;
