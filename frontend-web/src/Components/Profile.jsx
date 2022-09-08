import React from "react";
import {useEffect,useState} from 'react';
import {Avatar, Stack, Typography} from '@mui/material';
import { Box } from "@mui/system";
import ListItem from "./ListItem";

const Profile = ({token,setToken,setNavigation}) => {

    const [posts,setPosts] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/api/posts',{
        method:'get',
        headers: {
            token: token,
            'Content-Type': 'application/json',
          }}).then(res => res.json().then(body => {
              if(res.status == 401){
                return setToken(null)
              }
              if(res.status <= 200){
                console.log(body)
                setPosts(body)
              }
          })
    )},[posts.length])

    return(
        <Box>
            <Stack sx={{backgroundColor:'#f2f2f2',p:3,alignItems:'center'}}>
            <Avatar sx={{maxWidth:'md',backgroundColor:'purple'}}>N</Avatar>
            <Typography variant="h6" >
            @name
            </Typography>
            </Stack>
            <ListItem posts={posts} setNavigation={setNavigation}/>
        </Box>
    )
}

export default Profile;