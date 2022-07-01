import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignBlank from './components/SignBlank';
import Profile from './components/Profile';
import Posts from './components/Posts';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const App = () => {

  const [authStatus,setStatus] = useState(true);
  const [token,setToken] = useState('3c6d022a-156d-4557-ac8e-7e7f88f0c2d2');

  return (
    <NavigationContainer>
      {authStatus ? 
      <Tab.Navigator screenOptions={{headerShown: false,tabBarActiveTintColor: '#e74c3c',}}>
        <Tab.Screen name='Profile' component={Profile} token={token} authStatus={setStatus}/>
        <Tab.Screen name='Posts' component={Posts}/>
      </Tab.Navigator> : 
      <SignBlank setStatus={setStatus}/>}
    </NavigationContainer>
  );
};



export default App;
