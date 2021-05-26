import React from 'react';
import {View, StatusBar} from 'react-native';
import Search from '../components/search';
import Header from '../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';

const home = () => {
  return (
    <View>
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
