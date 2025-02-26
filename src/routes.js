import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Feed from './pages/Feed';

const Stack = createStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Feed">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signin"
          component={Signin}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Feed"
          component={Feed}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
