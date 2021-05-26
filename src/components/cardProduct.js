import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import tailwind from 'tailwind-rn';
import {useNavigation} from '@react-navigation/core';
import Logo from '../assets/icon.png'

export default function cardProduct(props) {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate('Detail')} style={tailwind('h-72 w-40 border bg-white border-gray-200 rounded-2xl p-2 mt-10')}>
        <Image source={Logo} style={{resizeMode:'contain', height:'75%', width:'100%'}} />
        <Text style={tailwind('text-xl font-semibold my-1')}>Nike</Text>
        <View style={tailwind('flex-row justify-between items-center')}>
          <Text style={tailwind('text-xl font-bold')}>$10</Text>
          <TouchableOpacity>
            <Fontisto name='shopping-basket-add' size={25} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}
