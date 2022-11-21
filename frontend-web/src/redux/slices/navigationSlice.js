import {createSlice} from '@reduxjs/toolkit'
import Posts from '../../components/Posts'


const initialState = {
    value: <Posts />
}

const navigationSlice = createSlice({
    name:'navigation',
    initialState,
    reducers:{
        setNavigation: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {setNavigation} = navigationSlice.actions

export default navigationSlice.reducer