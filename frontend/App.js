import React, {useState, useEffect} from 'react';
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

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <NavigationContainer>
      {token ?
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#e74c3c',
          }}>
          <Tab.Screen
            name="Profile"
            children={() => <Profile token={token} setToken={setToken} />}
          />
          <Tab.Screen name="Posts" component={Posts} />
        </Tab.Navigator>
      ) : (
        <SignBlank setToken={setToken} />
      )}
    </NavigationContainer>
  );
};

export default App;
