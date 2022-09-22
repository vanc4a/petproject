import { useState } from 'react';
import {Button, TextField} from '@mui/material';
import {Stack} from '@mui/system'

const AddPost = ({token}) => {
    const [imageFile,setFile] = useState(null)
    const [description,setDescription] = useState('')
    let multipart = new FormData();

    return(<Stack sx={{alignItems:'center',pb:"10%"}}>
        {imageFile ? <img style={{width:'100%',height:'auto'}} src={URL.createObjectURL(imageFile)}  /> : null}
        <input type={'file'} onChange={event => {
            setFile(event.target.files[0])
            multipart.append('file',imageFile,'file')
            }} accept='image/*'/>
        <TextField
          sx={{m:2,width:'100%'}}
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Your description"
          onChange={event => setDescription(event.target.value)}
        />
        <Button disabled={description && imageFile ? false : true} onClick={() => fetch('http://localhost:3000/api/upload',{
            method:'POST',
            body: multipart
        }).then(res => {
            if(res.status == 200){
                res.json().then(body => fetch('http://localhost:3000/api/posts',
                {method:'POST',
                headers:{token:token,'Content-Type': 'application/json'},
                body:JSON.stringify({description:description,image:body.image})}))
            }
        })}>Add</Button>
    </Stack>)
}

export default AddPost;