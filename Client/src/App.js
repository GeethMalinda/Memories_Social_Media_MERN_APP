import './App.css';
import memories from './images/memories.png'
import Posts from './Components/Posts/Posts';
import Form from './Components/Form/Form';
import {AppBar, Container, Grid, Grow, Toolbar, Typography} from '@mui/material';
import useStyles from './styles';

function App() {

    const classes = useStyles();
  return (
      <Container maxWidth='lg'>
          <AppBar className={classes.appBar} position="static" color='inherit'>
              <Toolbar>
                  <Typography className={classes.heading} variant='h2' align='center' >
                      Memories
                  </Typography>
                  <img className={classes.image} src={memories} alt="icon" height="60"/>
              </Toolbar>

          </AppBar>

          <Grow in>
              <Container>
                  <Grid container justify='space-between' alignContent='stretch' spacing={3}>
                      <Grid item xs={6} >
                          <Posts/>
                      </Grid>
                      <Grid item xs={6} >
                          <Form/>
                      </Grid>
                  </Grid>
              </Container>
          </Grow>
      </Container>

  );
}

export default App;
