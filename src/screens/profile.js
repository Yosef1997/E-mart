import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/header';
import ProfileBody from '../components/Profile'

const profile = () => {
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={false}>
        <View style={tailwind('w-3/4')}>
          <Text style={tailwind('font-bold text-2xl')}>Profile</Text>
        </View>
        <TouchableOpacity>
          <Ionicons
            name="mail"
            size={25}
            color="gray"
            style={tailwind('ml-2')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="ios-notifications"
            size={25}
            color="gray"
            style={tailwind('ml-2')}
          />
        </TouchableOpacity>
      </Header>
      <ProfileBody />
    </View>
  );
};

export default profile;
