import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Assistant from './Assistant';
import BuyPoints from './BuyPoints';

const Stack = createNativeStackNavigator();

// redirecting/ navigating between pages

function MyStack() {
  return (
     <Stack.Navigator>
    {/* //   <Stack.Screen
    //     name="Assistants & Pets"
    //     component={Assistant}
    //     options={{
    //       headerTintColor: 'white',
    //       headerStyle: { backgroundColor: 'tomato' },
    //     }}
    //   />  */}
    <Stack.Screen
      name="Features"
      component={BuyPoints}
      options={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
      }}
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