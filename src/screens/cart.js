import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';

const cart = () => {
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={false}>
        <Text style={tailwind('font-bold text-2xl')}>Cart</Text>
        <TouchableOpacity>
          <Ionicons name="heart" size={25} color={'grey'} />
        </TouchableOpacity>
      </Header>
    </View>
  );
};

export default cart;
