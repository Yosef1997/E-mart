import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import tailwind from 'tailwind-rn';
import Header from '../components/header';
import Search from '../components/search';
import Ionicons from 'react-native-vector-icons/Ionicons';

const search = () => {
  const navigation = useNavigation()
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={false}>
        <TouchableOpacity onPress={()=>navigation.goBack('')}>
          <Ionicons name="md-arrow-back" size={25} color={'grey'} />
        </TouchableOpacity>
        <View style={tailwind('w-4/6')}>
          <Search />
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
          <Ionicons name="home" size={25} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
          <Ionicons name="ios-cart" size={25} color={'grey'} />
        </TouchableOpacity>
      </Header>
    </View>
  );
};

export default search;
