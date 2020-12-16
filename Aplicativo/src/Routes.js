import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import PlugInteligente from './screens/PlugInteligente';
import ControleLaboratorio from './screens/ControleLaboratorio';
import Header from './components/Header';

const Stack = createStackNavigator();

const getRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="plug">
        <Stack.Screen
          name="controleLab"
          component={ControleLaboratorio}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="plug"
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
      <Header>{getRoutes()}</Header>
    </>
  );
};
export default Routes;
