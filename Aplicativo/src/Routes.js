import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'

import Login from './screens/Login'
import Register from './screens/Register'
import SideBar from './components/SideBar'
import PlugInteligente from './screens/PlugInteligente'
import ControleLaboratorio from './screens/ControleLaboratorio'

import COLORS from './assets/colors'

const Drawer = createDrawerNavigator()

const Routes = props => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <SideBar {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.background
          },
          headerTintColor: COLORS.textColor,
          headerTitleStyle: {
            color: COLORS.textColor,
            fontSize: 23,
            fontFamily: 'Spartan'
          },
          headerTitleAlign: 'center'
        }}
        initialRouteName={Login}
      >
        <Drawer.Screen
          name="login"
          component={Login}
          options={{ swipeEnabled: false }}
        />

        <Drawer.Screen name="register" component={Register} />

        <Drawer.Screen name="side" component={SideBar} />

        <Drawer.Screen
          name="controleLab"
          component={ControleLaboratorio}
          options={{
            title: 'Nepar',
            headerShown: true
          }}
        />

        <Drawer.Screen
          name="plug"
          component={PlugInteligente}
          options={{
            title: 'Nepar',
            headerShown: true
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const mapStatetoProps = state => ({
  loggedIn: state.AutenticationReducer.loggedIn
})

export default connect(mapStatetoProps)(Routes)
