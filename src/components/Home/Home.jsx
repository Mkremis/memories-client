import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import { Container, Grow, Grid } from '@mui/material';

const styles = {
    container: isRowBased => ({
      flexDirection: isRowBased ? 'row' : 'column-reverse',
    })
  };

const Home = ({currentId, setCurrentId})=>{
    const mediaMatch = window.matchMedia('(min-width: 414px)');
    const [matches, setMatches] = useState(mediaMatch.matches);

    useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener('change', handler);
        return () => mediaMatch.removeEventListener('change', handler);
      });

    return(
        <Grow in>
        <Container>
            <Grid style={styles.container(matches)} container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
        </Container>
  </Grow>
    )
}

export default Home