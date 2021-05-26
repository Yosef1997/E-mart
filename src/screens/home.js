import React from 'react';
import {View, Text} from 'react-native';
import Search from '../components/search';
import Header from '../components/header';

const home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Header style={true}>
        <Search />
      </Header>
    </View>
  );
};

export default home;
