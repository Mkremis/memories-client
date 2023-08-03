import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';
import moment from 'moment';
import {useDispatch} from 'react-redux'
import './styles.css'
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch();
  return (<Card className='card'>
    <CardMedia className='media' image={post.selectedFile} title={post.title}/>
    <div className='overlay'>
      <Typography variant='h6'>{post.creator}</Typography>
      <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div className='overlay2'>
      <Button style={{color:'white'}} size='small' onClick={()=>setCurrentId(post._id)}>
        <MoreHoriz fontSize='default'/>
      </Button>
    </div>
    <div className='details'>
      <Typography variant='body2' color='textSecondary' >{post.tags.map((tag)=>`#${tag} `)}</Typography>
    </div>
      <Typography className='title' variant='h5' gutterBottom >{post.title}</Typography>
    <CardContent>
      <Typography  variant='body2' color='textSecondary' component='p'>{post.message}</Typography>
    </CardContent>
    <CardActions className='cardActions'>
      <Button size='small' color='primary' onClick={()=>dispatch(likePost(post._id))}>
        <ThumbUpAlt fontSize='small'/>
        &nbsp; Like &nbsp;
        {post.likeCount}
      </Button>
      <Button size='small' color='primary' onClick={()=>dispatch(deletePost(post._id))}>
        <Delete fontSize='small'/>
        Delete
      </Button>
    </CardActions> 
  </Card>
  )
};
export default Post;
