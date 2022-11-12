import { Container} from '@mui/material';
import Navbar from './Components/Navbar/NavBar';
import { BrowserRouter, Switch, Route,Redirect } from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import PostDetails from './Components/PostDeatails/PostDetails';

function App() {

    const  user = JSON.parse(localStorage.getItem('profile'))
    console.log('user ==> ',user);
    return (
      <BrowserRouter>
          <Container maxWidth="xl">
              <Navbar />
              <Switch>
                  <Route path="/" exact component={() => <Redirect to="/posts" />} />
                  <Route path="/posts" exact component={Home} />
                  <Route path="/posts/search" exact component={Home} />
                  <Route path="/posts/:id" exact component={PostDetails} />
                  <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
              </Switch>
          </Container>
      </BrowserRouter>
  );
}

export default App;
