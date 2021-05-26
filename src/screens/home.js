import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import Header from '../components/header';
import Search from '../components/search';
import Menu from '../components/homeMenu'
import CardProduct from '../components/cardProduct'

const home = () => {
  return (
    <ScrollView style={tailwind('bg-white flex-1')}>
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
      <Menu />
      <View style={(tailwind('bg-gray-50 mt-10 py-10 rounded-3xl'))}>
        <Text style={tailwind('text-3xl font-bold mx-5')}>New Arrivals</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', paddingHorizontal: 20 }}>
            <CardProduct />
            <CardProduct />
            <CardProduct />
          </View>
      </View>
    </ScrollView>
  );
};

export default home;
