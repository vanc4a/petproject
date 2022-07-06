import React,{useState} from "react";
import {View,Image,Dimensions,TextInput,Text,Pressable,StyleSheet} from 'react-native';
import FetchRepository from "../repositories/FetchRepository";

const {width,height} = Dimensions.get('window');
const interval = width/15;
const fetchRepository = new FetchRepository();

const SignIn = ({setError,setToken}) => {

    const [login,setLogin] = useState(null);
    const [pass,setPass] = useState(null);

    return (<View>
        <TextInput onChangeText={setLogin}
        value={login}
        placeholder='Login'
        style={styles.input}/>
        <TextInput onChangeText={setPass}
        value={pass}
        placeholder='Password'
        secureTextEntry={true}
        style={styles.input}/>
        <View style={styles.signContainer}>
        <Text style={{fontSize:interval,color:'#7f8c8d'}}>Sign in</Text>
        <Pressable onPress={() => {fetchRepository.SignIn(login,pass,setToken,setError)}}>
            <Image source={require('../img/arrow2.png')} style={styles.arrow}/>
        </Pressable>
        </View>
    </View>)
}

export default SignIn;

const styles = StyleSheet.create({
    input: {
        height:interval*1.5,
        alignSelf:'stretch',
        borderBottomWidth:interval/15,
        marginBottom:interval/2,
        fontSize:interval/1.5,
        borderColor:'#bdc3c7'
    },
    signContainer : {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    arrow:{
        width:interval*2,
        height:interval*2
    },
});