import {Stack} from "@mui/system";
import {Button , Avatar, Link} from '@mui/material'
import { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LockIcon from "@mui/icons-material/Lock";

const SignBlank = () => {

    const [process,setProcess] = useState(true);

    return (<Stack sx={{alignItems:'center',justifyContent:'center'}}>
        <Avatar sx={{backgroundColor:'#6c5ce7',m:5,p:1,mb:5,alignSelf:'center'}}>
            <LockIcon />
        </Avatar>
        <Button />
        {process ? <SignIn /> : <SignUp setProcess={setProcess}/>}
        <Link onClick={() => setProcess(process ? false : true)} variant="body2">
        {process ? "Don't have an account?" : "Already have an account?"}
        </Link>
        </Stack>)
}

export default SignBlank;