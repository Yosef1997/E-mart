import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import Header from '../components/header';
import CardCart from '../components/cardCart'

const cart = () => {
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={false}>
        <Text style={tailwind('font-bold text-2xl')}>Cart</Text>
        <TouchableOpacity>
          <Ionicons name="heart" size={25} color={'grey'} />
        </TouchableOpacity>
      </Header>
      <View style={tailwind('px-5')}>
        <ScrollView>
          <CardCart />
          <CardCart />

          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />
          <CardCart />

        </ScrollView>
      </View>
    </View>
  );
};

export default cart;
