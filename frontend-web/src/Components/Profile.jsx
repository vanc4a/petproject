import React from "react";
import {useEffect,useState} from 'react';
import {Avatar, Stack, Typography, Badge} from '@mui/material';
import { Box } from "@mui/system";
import ListItem from "./ListItem";
import AddPost from "./AddPost";
import {setError} from '../redux/slices/errorSlice' 
import {setToken} from '../redux/slices/tokenSlice'
import { setNavigation } from "../redux/slices/navigationSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {

    const [posts,setPosts] = useState([])
    const token = useSelector((state) => state.token.value)
    const dispatch = useDispatch();
    
    useEffect(() => {
        fetch('http://localhost:3000/api/posts',{
        method:'get',
        headers: {
            token: token,
            'Content-Type': 'application/json',
          }}).then(res => res.json().then(body => {
              if(res.status == 401){
                dispatch(setError(body.message))
                return dispatch(setToken(null))
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
            <Badge badgeContent={'+'} anchorOrigin={{vertical:'bottom',horizontal:'right'}} color='success'>
            <Avatar sx={{maxWidth:'md',backgroundColor:'purple'}} onClick={() => dispatch(setNavigation(<AddPost />))}>N</Avatar>
            </Badge>
            <Typography variant="h6" >
            @name
            </Typography>
            </Stack>
            <ListItem posts={posts}/>
        </Box>
    )
}

export default Profile;