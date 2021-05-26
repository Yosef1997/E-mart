import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import Logo from '../assets/icon.png'

export default function cardCart(props) {
  return (
    <View>
      <TouchableOpacity style={tailwind('flex-row justify-between border border-gray-200 rounded-3xl w-full p-5 mt-5')}>
        <Image source={Logo} style={{ resizeMode: 'contain', height: '100%', width: '15%' }} />
        <View style={tailwind('w-1/2')}>
          <Text style={tailwind('text-xl mb-4')}>Name</Text>
          <Text style={tailwind('text-xl font-bold')}>Price</Text>
        </View>
        <View style={tailwind('items-end')}>
          <View style={tailwind('flex-row items-center justify-between mb-4')}>
            <TouchableOpacity>
              <Ionicons name='ios-remove' size={25} />
            </TouchableOpacity>
            <TouchableOpacity style={tailwind('mx-2')}>
              <Ionicons name='ios-add' size={25} />
            </TouchableOpacity>
            <Text style={tailwind('text-xl')}>1</Text>
          </View>
          <TouchableOpacity>
            <Ionicons name='ios-trash' size={25} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}
