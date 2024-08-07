import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchBookScreen from './src/screens/SearchBookScreen';
import BookTreeScreen from './src/screens/BookTreeScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={'LoginScreen'}
          screenOptions={{
            headerShown: false,
            contentStyle: {backgroundColor: 'white'},
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen name="SearchBookScreen" component={SearchBookScreen} />
          <Stack.Screen name="BookTreeScreen" component={BookTreeScreen} />
          <Stack.Screen name="BookDetailScreen" component={BookDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
