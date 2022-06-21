import React,{useEffect,useState} from 'react';
import {View,SafeAreaView,Text,TextInput,Pressable,Dimensions,Button} from 'react-native';

const {width,height} = Dimensions.get('window')
const interval = width/15

const SignBlank = () => {

    const [signTitle,setSignTitle] = useState('Sign in')
    const [process,setProcess] = useState('log')
    const [login,setLogin] = useState(null);
    const [pass,setPass] = useState(null);
    const [passValid,setPassValid] = useState(null);
    const [error,setError] = useState(false);
    const [errorText,setErrorText] = useState(null);

    return (<SafeAreaView style={{backgroundColor:'white',flex:1,justifyContent:'center',padding:interval*2}}>
        <TextInput onChangeText={setLogin}
        value={login}
        placeholder='Login'
        style={{height:interval*1.5,alignSelf:'stretch',borderBottomWidth:interval/15,marginBottom:interval/2,fontSize:interval/1.5,borderColor:'#b2bec3'}
        }/>
        <TextInput onChangeText={setPass}
        value={pass}
        placeholder='Password'
        secureTextEntry={true}
        style={{height:interval*1.5,alignSelf:'stretch',borderBottomWidth:interval/15,marginBottom:interval,fontSize:interval/1.5,borderColor:'#b2bec3'}
        }/>
        {process == 'reg' ?
        <TextInput onChangeText={setPassValid}
        value={passValid}
        placeholder='Confirm Password'
        secureTextEntry={true}
        style={{height:interval*1.5,alignSelf:'stretch',borderBottomWidth:interval/15,marginBottom:interval,fontSize:interval/1.5,borderColor:'#b2bec3'}
        }/> : null }
        {error ? <Text style={{fontSize:interval/2,color:"red"}}>{errorText}</Text> : null}
        <Button 
            title={process == 'reg' ? 'Sign up' : 'Sign in'} 
            onPress={
                () => {
                    fetch('http://localhost:3000/',{
                        method  : 'POST',
                        header : {
                        Accept  : 'application/json',
                        'Content-Type' : 'application/json'
                        },
                        body :  `{"process":"${process}","login":"${login}","pass":"${pass}"}`
                        })
                        .then(
                            response => {
                                return response.json()
                            })
                        .then(json => {
                            setError(json.status)
                            setErrorText(json.error)
                        });     
                    }
                }
        />
        <Pressable onPress={() => {setProcess(process == 'reg' ? 'log' : 'reg'),setSignTitle(process == 'log' ? 'Sign up' : 'Sign in')}}>
        <Text style={{fontSize:interval/2,color:'black',paddingTop:interval/2,textDecorationLine:'underline'}}>{signTitle}</Text>
        </Pressable>
    </SafeAreaView>)
}

export default SignBlank;