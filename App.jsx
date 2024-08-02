import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchBookScreen from './src/screens/SearchBookScreen';
import BookTreeScreen from './src/screens/BookTreeScreen';
import BookItem from './src/components/BookItem';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'LoginScreen'}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SearchBookScreen"
            component={SearchBookScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BookTreeScreen"
            component={BookTreeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BookItem"
            component={BookItem}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
