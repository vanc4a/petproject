import React,{useState,useEffect} from "react";
import {View,Image,Dimensions,TextInput,Text,Pressable,SafeAreaView,FlatList} from 'react-native';

const {width,height} = Dimensions.get('window');
const interval = width/15;


const DATA = [
    {color: "#9b59b6"},
    {color: "#9b59b6"},
    {color: "#9b59b6"},
    
]

const Profile = () => {


    const [token,setToken] = useState('3c6d022a-156d-4557-ac8e-7e7f88f0c2d2');
    const [profile,setProfile] = useState({name:'username'})

    useEffect(() => {
        fetch('http://100.126.58.198:3000/content/userprofile',{
                        method  : 'POST',
                        header : {
                        Accept  : 'application/json',
                        'Content-Type' : 'application/json'
                        },
                        body :  `{"token":"${token}"}`
                        })
                        .then(
                            response => {
                                return response.json()
                            })
                        .then(json => {
                            if(json.name){
                                console.log(json)
                                setProfile({name: json.name})
                            }
                            else {
                            }
                        }); 

    },[profile.name])


    return (<SafeAreaView style={{backgroundColor:'white',flex:1,alignItems:'center'}}>
        <View style={{alignSelf:'stretch',backgroundColor:'#f2f2f2',borderBottomLeftRadius:interval/2,borderBottomRightRadius:interval/2,alignItems:'center',padding:interval/2}}>
            <View style={{justifyContent:'space-evenly',flexDirection:'row',alignItems:'center',alignSelf:'stretch'}}>
            <View style={{alignItems:'center'}}>
            <View style={{width:width/4,height:width/4,backgroundColor:'#27ae60',borderRadius:width}}/>
            <Text style={{fontSize:interval,color:'black'}}>@{profile.name}</Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:interval/1.2,marginBottom:interval}}>Posts</Text>
                <Text style={{fontSize:interval/1.2}}>Followers</Text>
            </View>
            </View>
        </View>
        <View style={{alignSelf:'stretch',backgroundColor:'#f2f2f2',borderRadius:interval/2,padding:interval/2,margin:interval/2}}>
        <View style={{flexDirection:'row'}}>
        {DATA.map(item => {
            return (<View style={{width:width/3.5,height:width/3.5,backgroundColor:item.color,marginRight:interval/20,marginBottom:interval/20}} />)
        })}
        </View>
        </View>
        
    </SafeAreaView>)
}

export default Profile;