import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-reanimated';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Feed from './pages/Feed';

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const DrawerComponent = () => {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Feed"
//       screenOptions={{headerShown: false}}>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Marketsplace" component={Feed} />
//       <Drawer.Screen name="Orders" component={Feed} />
//     </Drawer.Navigator>
//   );
// };

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
