import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import { getPosts } from './actions/posts';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import memories from './images/memories.png';
import { Container, Typography, Grow, Grid } from '@mui/material';
import './styles.css'


const styles = {
  container: isRowBased => ({
    flexDirection: isRowBased ? 'row' : 'column-reverse',
  })
};

function App() {
  const mediaMatch = window.matchMedia('(min-width: 414px)');
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addEventListener('change', handler);
    return () => mediaMatch.removeEventListener('change', handler);
  });

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
            style={styles.container(matches)}
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
