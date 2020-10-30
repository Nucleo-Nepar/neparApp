import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/Home';
import SideBar from './components/SideBar';

const Stack = createStackNavigator();

const getRoutes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

const Routes = () => {
  return (
    <>
      <SideBar>{getRoutes()}</SideBar>
    </>
  );
};
export default Routes;
