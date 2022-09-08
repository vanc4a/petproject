import React,{useState} from "react";
import { TextField, Button, Stack, Alert} from "@mui/material";
import {SendOutlined} from '@mui/icons-material'

const SignIn = ({setToken}) => {

    const [pass,setPass] = useState(null)
    const [login,setLogin] = useState(null)
    const [error,setError] = useState(null)

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
                return setError(body.message)
            }
            setToken(body.token)
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
        {error ? <Alert sx={{width:1}} variant="filled" severity="error">{error}</Alert> : null}
    </Stack>)
}

export default SignIn