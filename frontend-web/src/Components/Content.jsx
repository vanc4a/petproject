import { useState } from "react"
import { BottomNavigation, BottomNavigationAction, Box, Typography } from "@mui/material"
import ProfileIcon from '@mui/icons-material/AccountCircle'
import PostsIcon from '@mui/icons-material/Search'
import Profile from "./Profile"
import Posts from "./Posts"
import { Container } from "@mui/system"

const Content = ({token,setToken}) => {

    const [navigation,setNavigation] = useState(<Profile />)

    return(<Container sx={{p:0,alignContent:'center',alignItems:'center',justifyContent:'center'}}>
        {navigation}
        <BottomNavigation sx={{backgroundColor:'#f2f2f2',position: 'fixed', bottom: 0, left: 0, right: 0 }}>
            <BottomNavigationAction  label='Posts' icon={<PostsIcon />} onClick={() => setNavigation(<Posts />)}/>
            <BottomNavigationAction label='Profile' icon={<ProfileIcon />} onClick={() => setNavigation(<Profile token={token} setToken={setToken} setNavigation={setNavigation}/>)}/>
        </BottomNavigation>
    </Container>)
}

export default Content;