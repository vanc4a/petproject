import React,{useState} from "react";
import {View,Image,Dimensions,TextInput,Text,Pressable,SafeAreaView} from 'react-native';

const {width,height} = Dimensions.get('window');
const interval = width/15;

const Posts = () => {



    return (<SafeAreaView style={{backgroundColor:'white',flex:1,justifyContent:'center',padding:interval*2}}>
        <Text>Profile</Text>
    </SafeAreaView>)
}

export default Posts;