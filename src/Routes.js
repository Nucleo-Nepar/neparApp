import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './components/Home';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

function Sobre() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

class Routes extends Component {
  render() {
    return (
      <NavigationContainer>
        {/* <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              headerTitle: () => <Text>Homem</Text>,
            }}
          />
        </Stack.Navigator> */}
        <Tab.Navigator
          initialRouteName="Home"
          barStyle={{
            backgroundColor: '#001d2e',
            borderTopColor: '#f0edf6',
            borderTopWidth: 0.2,
            borderTopLeftRadius: 50,
          }}
          activeColor="#005b87"
          inactiveColor="#f0edf6">
          <Tab.Screen
            name="settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="settings"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Sobre"
            component={Sobre}
            options={{
              tabBarLabel: 'Updates',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export default Routes;
