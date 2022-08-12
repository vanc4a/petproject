import React, {useState} from 'react';
import {
  View,
  Image,
  Dimensions,
  TextInput,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const interval = width / 15;

const DAAT = [
  {item: 1},
  {item: 2},
  {item: 1},
  {item: 1},
  {item: 2},
  {item: 1},
  {item: 1},
  {item: 1},
  {item: 2},
  {item: 1},
  {item: 1},
  {item: 1},
];

const Posts = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        flex: 3,
        alignItems: 'center',
      }}>
      {/* <View style={{flexDirection:'row'}} >
        <View>
            <View style={{backgroundColor:'green',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
            <View style={{backgroundColor:'green',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
        </View>
        <View style={{backgroundColor:'blue',marginRight:interval/10,marginBottom:interval/10,height:width/1.55+interval/10,width:width/1.55+interval/10}} />
        </View>

        <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor:'green',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
            <View style={{backgroundColor:'green',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
            <View style={{backgroundColor:'green',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
        </View>
        <View style={{flexDirection:'row'}}>
            <View style={{backgroundColor:'blue',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
            <View style={{backgroundColor:'blue',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
            <View style={{backgroundColor:'blue',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
        </View>

        <View style={{flexDirection:'row'}} >
        <View style={{backgroundColor:'blue',marginRight:interval/10,marginBottom:interval/10,height:width/1.55+interval/10,width:width/1.55+interval/10}} />
        <View>
            <View style={{backgroundColor:'green',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
            <View style={{backgroundColor:'green',marginRight:interval/10,marginBottom:interval/10,height:width/3.1,width:width/3.1}} />
        </View>
        </View> */}
    </SafeAreaView>
  );
};

export default Posts;
