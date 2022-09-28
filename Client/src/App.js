import memories from './images/memories.png'
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import {AppBar, Container, Grid, Grow, Toolbar, Typography} from '@mui/material';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {useEffect,useState} from 'react';
import {getPosts} from './actions/posts'
function App() {
    const [currentID,setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts())
    },[dispatch,currentID])

  return (
      <Container maxWidth='lg' style={{padding:'unset',margin:'auto'}}>
          <AppBar className={classes.appBar} position="static" color='inherit'>
              <Toolbar>
                  <Typography className={classes.heading} variant='h2' align='center' >
                      Nostalgia
                  </Typography>
                  <img className={classes.image} src={memories} alt="icon" height="60"/>
              </Toolbar>

          </AppBar>

          <Grow in>
              <Container>
                  <Grid container justify='space-between' alignContent='stretch' spacing={3}>
                      <Grid item xs={6} >
                          <Posts setCurrentId = {setCurrentId}/>
                      </Grid>
                      <Grid item xs={6} >
                          <Form currentId={currentID} setCurrentId = {setCurrentId}/>
                      </Grid>
                  </Grid>
              </Container>
          </Grow>
      </Container>

  );
}

export default App;
