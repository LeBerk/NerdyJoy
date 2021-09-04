import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import HomeProfile from './components/HomeProfile';
import Setting from './components/Setting';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// redirecting/ navigating between pages

function MyStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeProfile}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#FF89BB' },
          headerRight: () => (
            <Icon 
            onPress={() => navigation.openDrawer()}
            size={30}
            name="cog"/>
          ),
          headerLeft: () => (
            <Icon 
            name="chevron-with-circle-left"
            size={30}
            color= 'black'
          />
          ),
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Setting}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeProfile">
        <Drawer.Screen name="Home" component={MyStack}/>
        <Drawer.Screen name="Notification" component={MyStack}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}