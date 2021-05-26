import React from 'react';
import {View} from 'react-native';
import Header from '../components/header';
import Search from '../components/search';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';

const home = () => {
  return (
    <View style={tailwind('bg-white flex-1')}>
      <Header style={true}>
        <View style={tailwind('w-3/4')}>
          <Search />
        </View>
        <Ionicons
          name="heart"
          size={25}
          color={'grey'}
          style={tailwind('ml-2')}
        />
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

export default home;
