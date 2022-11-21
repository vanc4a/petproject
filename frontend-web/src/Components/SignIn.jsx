import React,{useState} from "react";
import { TextField, Button, Stack } from "@mui/material";
import {SendOutlined} from '@mui/icons-material'
import {setToken}  from '../redux/slices/tokenSlice' 
import {setError} from '../redux/slices/errorSlice' 
import { useDispatch } from "react-redux";

const SignIn = () => {

    const [pass,setPass] = useState(null)
    const [login,setLogin] = useState(null)
    const dispatch = useDispatch();

    const SignInFetch = () => {
        fetch('http://localhost:3000/api/signin',{
        method:"post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({pass:pass,login:login})
        }).then(res => res.json()
        .then(body => {
            if(!res.ok){
                return dispatch(setError(body.message))
            }
            dispatch(setToken(body.token))
        }))
    }

    return(<Stack sx={{justifyContent:'space-between',alignItems:'center'}}>
        <TextField  value={login} 
                    onChange={e => setLogin(e.target.value)}
                    sx={{mb:1}}
                    id="filled-basic" 
                    label="Login"
                    variant="outlined" />
        <TextField  value={pass} 
                    onChange={e => setPass(e.target.value)}
                    id="filled-basic" 
                    label="Password" 
                    variant="outlined"
                    type='password'
                    />
        <Button 
                sx={{mt:2,mb:1,width:0.95}}
                variant="contained" 
                endIcon={<SendOutlined />}
                onClick={() => SignInFetch()}
                >
        Login
        </Button>
    </Stack>)
}

export default SignIn