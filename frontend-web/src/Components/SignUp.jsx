import {useState} from "react";
import { TextField, Button, Typography, Stack, Alert} from "@mui/material";
import {SendOutlined} from '@mui/icons-material'
import {setError} from '../redux/slices/errorSlice' 
import { useDispatch } from "react-redux";

const SignUp = ({setProcess}) => {

    const [pass,setPass] = useState(null)
    const [passValidation,setValidation] = useState(null)
    const [login,setLogin] = useState(null)
    const dispatch = useDispatch();

    const SignUpFetch = () => {
        fetch('http://localhost:3000/api/signup',{
        method:"post",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({pass:pass,login:login})
        }).then(res => {
            console.log(res.ok)
            if(!res.ok){
                res.json().then(body => dispatch(setError(body.message)))
            }
            setProcess(true)
        })
    }

    return(<Stack sx={{alignItems:'center'}}>
        <TextField  value={login} 
                    onChange={e => setLogin(e.target.value)}
                    sx={{mb:1}}  
                    id="filled-basic" 
                    label="Login"
                     variant="outlined" />
        <TextField  value={pass} 
                    onChange={e => setPass(e.target.value)}
                    sx={{mb:1}} 
                    id="filled-basic" 
                    label="Password" 
                    variant="outlined"
                    type='password'
                    />
        <TextField value={passValidation} 
                    onChange={e => setValidation(e.target.value)}  
                    id="filled-basic" 
                    label="Pass one more time" 
                    variant="outlined"
                    type='password'
                    />
        <Button 
                disabled={pass === passValidation ? false : true}
                sx={{mt:2,mb:1,width:1}}
                variant="contained" 
                endIcon={<SendOutlined />}
                onClick={() => SignUpFetch()}
                >
        Register
        </Button>
    </Stack>)
}

export default SignUp