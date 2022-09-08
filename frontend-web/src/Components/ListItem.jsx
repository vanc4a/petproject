import {Typography, ImageList, ImageListItem, ImageListItemBar} from '@mui/material';
import Post from './Post';

const ListItem = ({posts,setNavigation}) => {
    return(posts.length ? 
        <ImageList sx={{m:0,mb:7,p:0.5}} cols={3} >    
        {posts.map(item => <ImageListItem onClick={() => setNavigation(<Post item={item}/>)}><img src={`http://localhost:3000/img/${item.image}.png`}/></ImageListItem>)}
        </ImageList> : <Typography varinant={'h3'}>No posts yet</Typography>)
}

export default ListItem;