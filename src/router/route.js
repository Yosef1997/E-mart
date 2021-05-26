import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';
import buttonTab from './buttonTab';
import Detail from '../screens/detail';
import Delivery from '../screens/delivery';
import Payment from '../screens/payment'
import Notifications from '../screens/notifications'
import Search from '../screens/search';

const Stack = createStackNavigator();

export default class route extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          component={buttonTab}
          options={{headerShown: false}}
          name="buttonTab"
        />
        <Stack.Screen
          component={Detail}
          options={{headerShown: false}}
          name="Detail"
        />
        <Stack.Screen
          component={Delivery}
          options={{headerShown: false}}
          name="Delivery"
        />
        <Stack.Screen
          component={Payment}
          options={{headerShown: false}}
          name="Payment"
        />
        <Stack.Screen
          component={Notifications}
          options={{headerShown: false}}
          name="Notifications"
        />
        <Stack.Screen
          component={Search}
          options={{headerShown: false}}
          name="Search"
        />
      </Stack.Navigator>
    );
  }
}
