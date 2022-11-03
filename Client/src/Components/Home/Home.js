import {Container, Grid, Grow,Paper,AppBar,TextField,Button} from '@mui/material';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import {useEffect, useState} from 'react';

import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import Pagination from '../Pagination';
import {useLocation, useNavigate} from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentID,setCurrentId] = useState(0);
    const [search , setSearch] =  useState('');
    const [tags , setTags] = useState()
    const classes = useStyles();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const query = useQuery();
    //read url and see if theare is a parameter called page if dont have the page we must be on the first one
    const page = query.get('page' || 1)
    const searchQuery = query.get('searchQuery');

    useEffect(() =>{
        dispatch(getPosts())
    },[dispatch,currentID])

    const handleKeyPress = (e) => {
        //13 is Enter Key
        if (e.keyCode === 13) {
            searchPost();
        }
    }
    const handleAddChip = (tag) => {
        setTags([...tags,tag])
    }

    const handleDeleteChip = (chipToDelete) => {
        setTags(tags.filter((tag) => tag !== chipToDelete))
    }

    const searchPost = () => {
        if (search.trim() || tags){

        }else {
            navigate('/')
        }
    }
    return(
        <Grow in>
            <Container maxWidth='xl'>
                <Grid container  spacing={3} className={classes.gridContainer}>
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <AppBar className={classes.appBarSearch} position="static" color="inherit">
                            <TextField
                                name="search"
                                variant="outlined"
                                label="Search Memories"
                                fullWidth
                                value={search}
                                onKeyDown={handleKeyPress}
                                onChange={(e) => setSearch(e.target.value)} />
                            <ChipInput
                                style={{ margin: '10px 0' }}
                                value={tags}
                                onAdd={(chip) => handleAddChip(chip)}
                                onDelete={(chip) => handleDeleteChip(chip)}
                                label="Search Tags"
                                variant="outlined"
                            />
                            <Button onClick={searchPost}
                                    // className={classes.searchButton}
                                    variant="contained" color="primary">Search</Button>
                        </AppBar>
                        <Form currentId={currentID} setCurrentId={setCurrentId} />
                        <Paper>
                            <Pagination/>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
