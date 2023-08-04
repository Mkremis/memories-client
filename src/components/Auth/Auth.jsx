import {   Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import InputForm from './Input';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import Icon from './icon';
import useStyles from './styles';
import { AUTH } from '../../constants/actionTypes';
import { useDispatch } from 'react-redux';



const Auth = ()=>{
    const classes = useStyles();
    const [showPassord, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const handleSubmit = ()=>{}
    const handleChange = ()=>{}
    const handleShowPassword = ()=>setShowPassword((prev)=>!prev);
    const history = useHistory();
    const dispatch = useDispatch()


    const swithMode = ()=> setIsSignUp((prev)=>!prev)
    
    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
          dispatch({ type: AUTH, data: { result, token } });
          history.push('/');
        } catch (error) {
          console.log(error);
        }
      };
    
      const googleError = () => alert('Google Sign In was unsuccessful. Try again later');
    

    return(
       <Container component='main' maxWidth='xs'>
        <Paper style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:8, padding:2}} elevation={3}>
            <Avatar className='avatar'>
                <LockOutlined/>
            </Avatar>
            <Typography variant='h5'>{isSignUp ?'Sign Up' :'Sign In'}</Typography>
            <form className='form' onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    { isSignUp && (
                     <>
                      <InputForm name={'firstName'} label={'First Name'} handleChange={handleChange} autoFocus half/>
                      <InputForm name={'lastName'} label={'Last Name'} handleChange={handleChange} half/>
                     </>
                    )}
                    <InputForm name={'email'} label={'Email Address'} handleChange={handleChange} type={'email'}/>
                    <InputForm name={'password'} label={'Password'} handleChange={handleChange}  handleShowPassword={handleShowPassword } type={showPassord ?"text" :"password"}/>
                    {isSignUp && <InputForm name={'confirmPassword'} label={'Repeat Password'} handleChange={handleChange} type={'password'}/>}
                </Grid>
                <Button type='submit' fullWidth variant='contained' color='primary' className='submit'>
                        {isSignUp ?"Sign Up" :"Sing In"} 
                </Button>
                <GoogleLogin
                clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com" 
                render={(renderProps) => (
                <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
                </Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleError}
                cookiePolicy="single_host_origin"
                />
                <Grid container justifyContent={'center'}>
                    <Grid item>
                        <Button onClick={swithMode}>
                        {isSignUp ?"Already have an account? Sign In" :"Don't have an account? Sign Up"} 
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
       </Container>
    )
}
export default Auth