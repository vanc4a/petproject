import React,{useState,useEffect} from "react";
import {View,Image,Dimensions,TextInput,Text,Pressable,SafeAreaView,FlatList,StyleSheet} from 'react-native';
import FetchRepository from "../repositories/FetchRepository";

const {width,height} = Dimensions.get('window');
const interval = width/15;
const fetchRepository = new FetchRepository()

const DATA = [
    {color: "#b2bec3"},
    {color: "#b2bec3"},
    {color: "#b2bec3"},
    {color: "#b2bec3"},
    {color: "#b2bec3"},
    {color: "#b2bec3"},
]

const Profile = ({token,setToken}) => {

    const [name,setName] = useState('username')
    
    useEffect(() => {
        fetchRepository.getProfile(token,setToken,setName)
    })

    const ItemRender = ({item}) => {
        return (<View style={[styles.postItem,{backgroundColor:item.color}]} />)
    }

    return (<SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
            <View style={styles.rowContainer}>
            <View style={{alignItems:'center'}}>
            <View style={styles.icon}/>
            <Text style={{fontSize:interval,color:'black'}}>@{name}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={[styles.profileText,{marginBottom:interval}]}>Posts</Text>
                <Text style={styles.profileText}>Followers</Text>
            </View>
            </View>
        </View>
        <View style={styles.postsContainer}>
        <FlatList 
        numColumns={3}
        renderItem={ItemRender}
        data={DATA}/> 
        </View>
    </SafeAreaView>)
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex:1,alignItems:'center'
    },
    profileContainer: {
        alignSelf:'stretch',
        backgroundColor:'#f2f2f2',
        borderBottomLeftRadius:interval/2,
        borderBottomRightRadius:interval/2,
        alignItems:'center',
        padding:interval/2
    },
    postsContainer:{
        alignSelf:'stretch',
        backgroundColor:'#f2f2f2',
        borderRadius:interval/2,
        padding:interval/2,
        margin:interval/2
    },
    rowContainer: {
        justifyContent:'space-evenly',
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'stretch'
    },
    postItem: {
        width:width/3.5,
        height:width/3.5,
        backgroundColor:'white',
        marginRight:interval/20,
        marginBottom:interval/20
    },
    icon: {
        width:width/4,
        height:width/4,
        backgroundColor:'#b2bec3',
        borderRadius:width
    },
    profileText: {
        fontSize:interval,
        color:'#b2bec3'
    }
});