import {configureStore} from '@reduxjs/toolkit';

import navigationReducer from './slices/navigationSlice.js';
import tokenReducer from './slices/tokenSlice.js';
import errorReducer from './slices/errorSlice.js';


export default configureStore({
    reducer:{
        navigation: navigationReducer,
        token: tokenReducer,
        error: errorReducer
    }
})