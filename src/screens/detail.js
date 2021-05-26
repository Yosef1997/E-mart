import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Header from '../components/header';
import Search from '../components/search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';

const detail = () => {
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={false}>
        <TouchableOpacity>
          <Ionicons name="md-arrow-back" size={25} color={'grey'} />
        </TouchableOpacity>
        <View style={tailwind('w-4/6')}>
          <Search />
        </View>
        <TouchableOpacity>
          <Ionicons name="share-social" size={25} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cart-outline" size={25} color={'grey'} />
        </TouchableOpacity>
      </Header>
    </View>
  );
};

export default detail;
