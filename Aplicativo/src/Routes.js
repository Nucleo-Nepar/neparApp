import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PlugInteligente from './screens/PlugInteligente';
import ControleLaboratorio from './screens/ControleLaboratorio';
import SideBar from './screens/SideBar';

const Stack = createStackNavigator();

const getRoutes = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Plug Inteligente"
        component={PlugInteligente}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Laboratório de Intalações"
        component={ControleLaboratorio}
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
