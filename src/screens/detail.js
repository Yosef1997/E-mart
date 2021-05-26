import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import Header from '../components/header';
import Search from '../components/search';
import DetailProduct from '../components/detailProduct'

const detail = () => {
  const navigation = useNavigation();
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={false}>
        <TouchableOpacity onPress={() => navigation.goBack('')}>
          <Ionicons name="md-arrow-back" size={25} color={'grey'} />
        </TouchableOpacity>
        <View style={tailwind('w-4/6')}>
          <Search />
        </View>
        <TouchableOpacity>
          <Ionicons name="share-social" size={25} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="ios-cart" size={25} color={'grey'} />
        </TouchableOpacity>
      </Header>
      <View style={tailwind('px-5 pt-5')}>
          <DetailProduct />
      </View>
      <View style={tailwind('flex-row justify-between w-full absolute bottom-0 p-5')}>
        <TouchableOpacity style={tailwind('bg-gray-50 border border-gray-200 rounded-3xl w-40 p-5')}>
          <Text style={tailwind('text-center text-xl font-bold')}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={tailwind('bg-red-300 border border-red-300 rounded-3xl w-40 p-5')}>
          <Text style={tailwind('text-center text-xl text-white font-bold')}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default detail;
