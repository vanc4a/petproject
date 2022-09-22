import { BottomNavigation, BottomNavigationAction} from "@mui/material"
import ProfileIcon from '@mui/icons-material/AccountCircle'
import PostsIcon from '@mui/icons-material/Search'
import Profile from "./Profile"
import Posts from "./Posts"
import { Container } from "@mui/system"
import { useSelector, useDispatch } from 'react-redux';
import {setNavigation} from '../redux/slices/navigationSlice';

const Content = () => {

    const navigation = useSelector((state) => state.navigation.value);
    const dispatch = useDispatch();

    return(<Container sx={{p:0,alignContent:'center',alignItems:'center',justifyContent:'center'}}>
        {navigation}
        <BottomNavigation sx={{backgroundColor:'#f2f2f2',position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigationAction label='Posts' 
                                    icon={<PostsIcon />}    
                                    onClick={() => dispatch(setNavigation(<Posts />))}/>

            <BottomNavigationAction label='Profile' 
                                    icon={<ProfileIcon />} 
                                    onClick={() => dispatch(setNavigation(<Profile />))}/>
        </BottomNavigation>
    </Container>)
}

export default Content;