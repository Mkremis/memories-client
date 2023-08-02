import React,  { useState } from 'react';
import FileBase64 from 'react-file-base64';
import './styles.css'
import { TextField, Button, Typography, Paper } from '@mui/material';
import {useDispatch} from 'react-redux'
import { createPost } from '../../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({
    creator:'', title:'', message:'', tags:'', selectedFile:''
  })
  const dispatch = useDispatch()
  const handleSubmit =(e)=>{
    e.preventDefault()
    dispatch(createPost(postData))
  }
  const clear =()=>{}
  return (
  <Paper className='paper'>
    <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit}>
      <Typography variant='h6'>Crating a Memory</Typography>
      <TextField style={{paddingBottom:'1rem'}} name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator: e.target.value})}/>
      <TextField style={{paddingBottom:'1rem'}} name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=>setPostData({...postData, title: e.target.value})}/>
      <TextField style={{paddingBottom:'1rem'}} name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=>setPostData({...postData, message: e.target.value})}/>
      <TextField  name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData, tags: e.target.value})}/>
      <div className='fileInput'>
        <FileBase64 type='file'multiple={false} onDone={({base64})=>setPostData({...postData, selectedFile: base64})}/>
      </div>
      <Button className='buttonSubmit' variant='contained' color='primary' size='large' type='submit' fullWidth>Subimt</Button>
      <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
  )
};
export default Form;
