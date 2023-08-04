import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import { Container, Grow, Grid } from '@mui/material';
import useStyles from './styles';


const Home = ({currentId, setCurrentId})=>{
  const classes = useStyles();
    return(
        <Grow in>
        <Container>
            <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
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