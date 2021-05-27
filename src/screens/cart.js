import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import Header from '../components/header';
import CardCart from '../components/cardCart'

const cart = () => {
  const navigation = useNavigation()
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
        </ScrollView>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Delivery')} style={tailwind('rounded-3xl bg-red-500 m-5 p-3')}>
        <Text style={tailwind('text-white text-center text-lg font-bold')}>Checkout</Text>
      </TouchableOpacity>
      <View style={tailwind('absolute bottom-0 w-full bg-white flex-row justify-between p-5')}>
        <Text style={tailwind('font-semibold text-xl')}>Total</Text>
        <Text style={tailwind('font-bold text-2xl')}>{`$${'10'}`}</Text>
      </View>
    </View>
  );
};

export default cart;
