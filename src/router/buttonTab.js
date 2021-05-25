import React, {Component} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Cart from '../screens/cart';
import Profile from '../screens/profile';

const Tab = createBottomTabNavigator();

export default class buttonTab extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ff1616',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name="cart-outline" size={size} color={color} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({size, color}) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
