import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';

import PlugInteligente from './screens/PlugInteligente';
import ControleLaboratorio from './screens/ControleLaboratorio';
import SideBar from './components/SideBar';

const Stack = createStackNavigator();

const getRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Teste">
        <Stack.Screen
          name="ControleLab"
          component={ControleLaboratorio}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Plug"
          component={PlugInteligente}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Routes = () => {
  return (
    <>
      <SideBar>{getRoutes()}</SideBar>
    </>
  );
};
export default Routes;
