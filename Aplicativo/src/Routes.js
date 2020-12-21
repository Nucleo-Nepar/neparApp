import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import Login from './screens/Login';
import Register from './screens/Register';
import SideBar from './components/SideBar';
import PlugInteligente from './screens/PlugInteligente';
import ControleLaboratorio from './screens/ControleLaboratorio';

import COLORS from './assets/colors';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <SideBar {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerTintColor: COLORS.textColor,
          headerTitleStyle: {
            color: COLORS.textColor,
            fontSize: 23,
            fontFamily: 'Spartan',
          },
          headerTitleAlign: 'center',
        }}
        initialRouteName="login">
        <Drawer.Screen name="login" component={Login} />

        <Drawer.Screen name="register" component={Register} />

        <Drawer.Screen
          name="controleLab"
          component={ControleLaboratorio}
          options={{
            title: 'Nepar',
            headerShown: true,
          }}
        />

        <Drawer.Screen
          name="plug"
          component={PlugInteligente}
          options={{
            title: 'Nepar',
            headerShown: true,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
