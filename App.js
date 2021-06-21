import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import{createBottomTabNavigator}from 'react-navigation-tabs'
import FaceBook from './screens/FaceBook'; from 
import Instagram from './screens/Instagram';
 

export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator=createBottomTabNavigator({
  Facebbok:{screen:FaceBook.js},
  Instagram:{screen:Instagram.js}
})
const AppContainer=createAppContainer(TabNavigator)



