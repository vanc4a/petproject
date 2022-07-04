import React,{useEffect,useState} from 'react';
import {View,SafeAreaView,Text,TextInput,Pressable,Dimensions,Button,Image} from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';

const {width,height} = Dimensions.get('window')
const interval = width/15

const SignBlank = ({setStatus}) => {

    const [process,setProcess] = useState(false)
    const [error,setError] = useState({status: false,text:'123'});

    return (<SafeAreaView style={{backgroundColor:'white',flex:1,justifyContent:'center',padding:interval*2}}>
        {process ? <SignIn setError={setError} authStatus={setStatus}/> : <SignUp setError={setError} setProcess={setProcess}/>}
        {error.status ? <Text style={{fontSize:interval/1.2,color:"red"}}>{error.text}</Text> : null}
        <Pressable onPress={() => setProcess(process ? false : true)} style={{top:width/2}}>
            <Text style={{fontSize:interval/1.7,textDecorationLine:'underline',color:'#7f8c8d'}}>{process ? "Sign up" : "Sign in"}</Text>
        </Pressable>
    </SafeAreaView>)
}

export default SignBlank;