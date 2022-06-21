import React,{useState} from 'react';
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

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => {

  const [status,setStatus] = useState(<SignBlank />)


  return (
    <NavigationContainer>
      {status}
    </NavigationContainer>
  );
};



export default App;
