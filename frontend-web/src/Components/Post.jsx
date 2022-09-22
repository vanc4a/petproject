import { Typography } from '@mui/material';
import {Box,Container} from '@mui/system'

const Post = ({item}) => {
    return(<Box sx={{mb:'20%'}}>
        <img style={{width:'100%',height:'auto'}} src={`http://localhost:3000/img/${item.image}`}/>
        <Box sx={{p:1,backgroundColor:'#f2f2f2'}}><Typography variant='h6'>@{item.user_login.toLowerCase()}</Typography><Typography>{item.description}</Typography></Box>
    </Box>)
}

export default Post;