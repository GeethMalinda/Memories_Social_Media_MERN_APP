import './App.css';
import {AppBar, Container, Grid, Grow, Typography} from '@material-ui/core';
import memories from './images/memories.png'
function App() {
  return (
    <div className="App">
      <Container maxWidth='lg'>
          <AppBar position='static' color='inherit'>
              <Typography variant='h2' align='center' >
                  Memories
              </Typography>
              <img src={memories} alt="memories" height="100"/>
          </AppBar>

          <Grow in>
              <Container>
                  <Grid container justify='space-between' alignContent='stretch' spacing={3}>
                      <Grid item xs={12} sm={7}>

                      </Grid>
                      <Grid item xs={12} sm={7}>

                      </Grid>
                  </Grid>
              </Container>
          </Grow>
      </Container>
    </div>
  );
}

export default App;
