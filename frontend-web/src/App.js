import { useState } from 'react';
import {Box} from "@mui/system";
import SignBlank from './Components/SignBlank';
import Content from './Components/Content';

function App() {

  const [token,setToken] = useState(null) 

  return <Box sx={{p:0,m:0}}>
    {token ? <Content token={token} setToken={setToken}/> : <SignBlank setToken={setToken}/>}
  </Box>
}

export default App;
