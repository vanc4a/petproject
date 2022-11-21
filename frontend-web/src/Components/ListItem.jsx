import {Typography, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setNavigation } from '../redux/slices/navigationSlice';
import Post from './Post';


const ListItem = ({posts}) => {

    const dispatch = useDispatch()

    return(posts ? 
        <ImageList sx={{m:0,mb:7,p:0.5}} cols={3} >    
        {posts.map(item => <ImageListItem onClick={() => dispatch(setNavigation(<Post item={item} />))}><img src={`http://localhost:3000/img/${item.image}`}/></ImageListItem>)}
        </ImageList> : <Typography varinant={'h3'}>No posts yet</Typography>)
}

export default ListItem;