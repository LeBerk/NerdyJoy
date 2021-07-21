import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { SignUpScreen, RegisterScreen, LoginScreen, WelcomeScreen } from './app/screens/'
import WelcomeScreen from "./src/features/authorization/screens/WelcomeScreen";
import SignUpScreen from "./src/features/authorization/screens/SignUpScreen";
import RegisterScreen from "./src/features/authorization/screens/RegisterScreen";
import LoginScreen from "./src/features/authorization/screens/LoginScreen";
import { Header } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }}
        />
        <Stack.Screen
          // options={{ headerLargeTitle: true }}
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          // options={{ headerLargeTitle: true }}
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          // options={{ headerLargeTitle: true }}
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5929D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
