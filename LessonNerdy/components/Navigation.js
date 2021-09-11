import React from 'react';
import {  View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import Lessons from './Lessons';
import Home from './Home';
import Profile from './Profile';

const TabNavigator = createMaterialBottomTabNavigator(
  { 
    Lessons: {
      screen: Lessons,
      navigationOptions: {
        tabBarLabel: 'Lessons',
        // tabBarIcon: ({ tintColor }) => (
        //   <View>
        //     <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
        //   </View>
        // ),
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        // tabBarIcon: ({ tintColor }) => (
        //   <View>
        //     <Icon
        //       style={[{ color: tintColor }]} size={25} name={'ios-settings'} />
        //   </View>
        // ), 
      },
    }, 
    Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarLabel: 'Profile',
        //   tabBarIcon: ({ tintColor }) => (
        //     <View>
        //       <Icon
        //         style={[{ color: tintColor }]} size={25} name={'ios-settings'} />
        //     </View>
        //   ), 
        },
      },
  },   
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#226557',
    barStyle: { backgroundColor: '#f69b31' },
  }
);

export default createAppContainer(TabNavigator);





