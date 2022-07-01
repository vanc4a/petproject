import React,{useState} from "react";
import {View,Image,Dimensions,TextInput,Text,Pressable} from 'react-native';

const {width,height} = Dimensions.get('window');
const interval = width/15;

const SignIn = ({setError,authStatus}) => {

    const [login,setLogin] = useState(null);
    const [pass,setPass] = useState(null);

    return (<View>
        <TextInput onChangeText={setLogin}
        value={login}
        placeholder='Login'
        style={{height:interval*1.5,alignSelf:'stretch',borderBottomWidth:interval/15,marginBottom:interval/2,fontSize:interval/1.5,borderColor:'#bdc3c7'}
        }/>
        <TextInput onChangeText={setPass}
        value={pass}
        placeholder='Password'
        secureTextEntry={true}
        style={{height:interval*1.5,alignSelf:'stretch',borderBottomWidth:interval/15,marginBottom:interval/2,fontSize:interval/1.5,borderColor:'#bdc3c7'}
        }/>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={{fontSize:interval,color:'#7f8c8d'}}>Sign in</Text>
        <Pressable onPress={() => {
                    fetch('http://100.126.58.52:3000/users/signin',{
                        method  : 'POST',
                        header : {
                        Accept  : 'application/json',
                        'Content-Type' : 'application/json'
                        },
                        body :  `{"login":"${login}","pass":"${pass}"}`
                        })
                        .then(
                            response => {
                                return response.json()
                            })
                        .then(json => {
                            if(json.error){
                                setError({status:true,text:json.error})
                            }
                            else {
                                authStatus(true)
                            }
                        });     
                    }}>
            <Image source={require('../img/arrow2.png')} style={{width:interval*2,height:interval*2}}/>
        </Pressable>
        </View>
    </View>)
}

export default SignIn;