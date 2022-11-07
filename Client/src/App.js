import { Container} from '@mui/material';
import Navbar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Home from './Components/Home/Home';
import Auth from './Components/Auth/Auth';
import PostDetails from './Components/PostDeatails/PostDetails';

function App() {

    const  user = JSON.parse(localStorage.getItem('profile'))

    return (
      <BrowserRouter>
          <Container maxWidth={false}>
              <Navbar />
              <Routes>
                  <Route path="/" exact element={<Navigate to="/posts" replace />}/>
                  <Route path="/posts" exact element={<Home/>} />
                  <Route path="/posts/search" exact element={<Home/>} />
                  <Route path="/post/:id" exact element={<PostDetails/>} />
                  <Route path="/auth" exact element={ !user ? <Auth/> : <Navigate to="/posts" replace /> } />
              </Routes>
          </Container>
      </BrowserRouter>
  );
}

export default App;
