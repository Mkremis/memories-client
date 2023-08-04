import {   Avatar, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import InputForm from './Input';
import { useState } from 'react';

const Auth = ()=>{

    const [showPassord, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const handleSubmit = ()=>{}
    const handleChange = ()=>{}
    const handleShowPassword = ()=>setShowPassword((prev)=>!prev);


    const swithMode = ()=> setIsSignUp((prev)=>!prev)

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