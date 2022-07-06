import React,{useEffect,useState} from 'react';
import {View,SafeAreaView,Text,TextInput,Pressable,Dimensions,Button,Image,StyleSheet} from 'react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';

const {width,height} = Dimensions.get('window')
const interval = width/15

const SignBlank = ({setToken}) => {

    const [process,setProcess] = useState(false)
    const [error,setError] = useState({status: false,text:'123'});

    return (<SafeAreaView style={styles.container}>
        {process ? <SignIn setError={setError} setToken={setToken}/> : <SignUp setError={setError} setProcess={setProcess}/>}
        {error.status ? <Text style={styles.errorText}>{error.text}</Text> : null}
        <Pressable onPress={() => setProcess(process ? false : true)} style={{top:width/2}}>
            <Text style={styles.switchText}>{process ? "Sign up" : "Sign in"}</Text>
        </Pressable>
    </SafeAreaView>)
}

export default SignBlank;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,justifyContent:'center',
        padding:interval*2
    },
    errorText: {
        fontSize:interval/1.2,color:"red"
    },
    switchText: {
        fontSize:interval/1.7,
        textDecorationLine:'underline',
        color:'#7f8c8d'
    }
});