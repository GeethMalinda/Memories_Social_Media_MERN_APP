import { Container} from '@mui/material';
import Navbar from './Components/Navbar/NavBar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {

  return (
      <BrowserRouter>
          <Container maxWidth="lg">
              <Navbar />
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/auth" exact component={Auth} />
              </Switch>
          </Container>
      </BrowserRouter>
  );
}

export default App;
