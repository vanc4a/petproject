import { Response as ResponseCore } from 'express';
import User from './db/User';
import Post from '../models/request/Post';
import SignIn from './response/SignIn';
import SignUp from '../models/request/SignUp';
import Error from './response/Error';
import Posts from './response/Posts';
import Profile from './response/Profile';

export default interface Response extends ResponseCore{
    user: User;
    body: any; // Post | SignIn | SignUp;
    send(arg: Error | Posts | Profile | SignIn | null )
};
