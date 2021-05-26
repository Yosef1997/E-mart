import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';

const cart = () => {
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={false}>
        <Text style={tailwind('font-bold text-2xl')}>Cart</Text>
        <Ionicons name="heart" size={25} color={'grey'} />
      </Header>
    </View>
  );
};

export default cart;
