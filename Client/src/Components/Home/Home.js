import {Container, Grid, Grow} from '@mui/material';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import {useEffect, useState} from 'react';
import useStyles from '../../styles';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';

const Home = () => {
    const [currentID,setCurrentId] = useState(0);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts())
    },[dispatch,currentID])

    return(
        <Grow in>
            <Container >
                <Grid className={classes.mainContainerApp} container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentID} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
