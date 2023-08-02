import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';
import moment from 'moment';

import './styles.css'

const Post = ({post}) => {
  return (<Card className='card'>
    <CardMedia className='media' image={post.selectedFile} title={post.title}/>
    <div className='overlay'>
      <Typography variant='h6'>{post.creator}</Typography>
      <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
    </div>
    <div className='overlay2'>
      <Button style={{color:'white'}} size='small' onClick={()=>{}}>
        <MoreHoriz fontSize='default'/>
      </Button>
    </div>
    <div className='details'>
      <Typography variant='body2' color='textSecondary' >{post.tags.map((tag)=>`#${tag} `)}</Typography>
    </div>
    <CardContent>
      <Typography className='title' variant='h5' gutterBottom >{post.message}</Typography>
    </CardContent>
    <CardActions className='cardActions'>
      <Button size='small' color='primary' onClick={()=>{}}>
        <ThumbUpAlt fontSize='small'/>
        Like
        {post.likeCount}
      </Button>
      <Button size='small' color='primary' onClick={()=>{}}>
        <Delete fontSize='small'/>
        Delete
      </Button>
    </CardActions>
  </Card>
  )
};
export default Post;
