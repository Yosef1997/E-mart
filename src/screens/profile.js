import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';

const profile = () => {
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={false}>
        <View style={tailwind('w-3/4')}>
          <Text style={tailwind('font-bold text-2xl')}>Profile</Text>
        </View>
        <Ionicons name="mail" size={25} color="gray" style={tailwind('ml-2')} />
        <Ionicons
          name="ios-notifications"
          size={25}
          color="gray"
          style={tailwind('ml-2')}
        />
      </Header>
    </View>
  );
};

export default profile;
