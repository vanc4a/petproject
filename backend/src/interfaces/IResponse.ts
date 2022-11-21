import { Response as ResponseCore } from 'express';
import User from './db/User';
import SignIn from './response/SignIn';
import Error from './response/Error';
import Posts from './response/Posts';
import Profile from './response/Profile';
import Image from './response/Image';
// import Post from '../models/request/Post';
// import SignUp from '../models/request/SignUp';

export default interface Response extends ResponseCore{
    user: User;
    body: any; // Post | SignIn | SignUp;
    send(arg: any ) // Error | Posts | Profile | SignIn | Image | null
};
