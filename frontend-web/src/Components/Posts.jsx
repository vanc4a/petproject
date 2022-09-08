import {useEffect,useState} from 'react';
import ImageList from '@mui/material/ImageList'
import ImageListItem  from "@mui/material/ImageListItem";
import ListItem from './ListItem';

const Posts = () => {

    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/posts/all',{
        method:'get',
        headers: {
            'Content-Type': 'application/json',
          }}).then(res => res.json().then(body => {
              if(res.status <= 200){
                setPosts(body)
              }
          })
    )},[posts.length])

    return(<ListItem posts={posts}/>)
}

export default Posts