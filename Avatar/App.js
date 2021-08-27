import * as React from 'react';
import { Animated } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import homeAvatar from './components/homeAvatar';
import editAvatar from './components/editAvatar';

const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: { opacity },
    rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
};

const Stack = createStackNavigator();

// redirecting/ navigating between pages

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="homeAvatar"
        component={homeAvatar}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      />
      <Stack.Screen
        name="editAvatar"
        component={editAvatar}
        options={{ headerStyleInterpolator: forFade }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}