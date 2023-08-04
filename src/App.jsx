import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { getPosts } from './actions/posts';
import { Container} from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';



function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()
  const theme = createTheme();
  const classes = useStyles();


  useEffect(()=>{
   setTimeout(() => {
    dispatch(getPosts())
   }, 1000);
  },[currentId, dispatch])

  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar/>
        <Routes>
        <Route path='/' element={ <Home currentId={currentId} setCurrentId={setCurrentId}/> }/>
        <Route path='/auth' element={<Auth/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
