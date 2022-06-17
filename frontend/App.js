import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignIn from './components/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const App = () => {

  return (
    <NavigationContainer>
      <SignIn />
    </NavigationContainer>
  );
};



export default App;
