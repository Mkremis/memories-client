import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './images/memories.png';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import './styles.css'



function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()

  useEffect(()=>{
   setTimeout(() => {
    dispatch(getPosts())
   }, 1000);
    
  },[currentId, dispatch])

  return (
    <Container maxWidth="lg">
      <header className='appBar' position="static" color="inherit">
        <Typography className='heading' variant="h2" align="center">
          Memories
        </Typography>
        <img className='image' src={memories} alt="memories" height="60" />
      </header>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>

            <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
