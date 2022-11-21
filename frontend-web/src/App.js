import {Box} from "@mui/system";
import {Snackbar, Alert, AlertTitle} from '@mui/material'
import SignBlank from './components/SignBlank';
import Content from './components/Content';
import { useSelector, useDispatch } from 'react-redux';
import {setError} from './redux/slices/errorSlice'

function App() {

  const token = (useSelector((state) => state.token.value))
  const error = (useSelector((state) => state.error.value))
  const dispatch = useDispatch();

  return <Box sx={{p:0,m:0}}>
    <Snackbar anchorOrigin={{vertical:'top',horizontal:'center'}} 
              open={error ? true : false}
              autoHideDuration={6000} 
              onClose={() => dispatch(setError(null))}>
      <Alert severity='error' sx={{ width: '100%' }} variant='filled'>
      <AlertTitle>Error</AlertTitle>
      {error}
      </Alert>
    </Snackbar>
    {token ? <Content /> : <SignBlank />}
  </Box>
}

export default App;
