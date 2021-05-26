import React from 'react';
import {View, TouchableOpacity} from 'react-native';
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
        <TouchableOpacity>
          <Ionicons
            name="heart"
            size={25}
            color={'grey'}
            style={tailwind('ml-2')}
          />
        </TouchableOpacity>
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
    </View>
  );
};

export default home;
