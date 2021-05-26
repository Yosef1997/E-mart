import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import Logo from '../assets/icon.png'

export default function detailProduct() {
  return (
    <View>
      <Image source={Logo} style={{ width: '100%', height: '60%', resizeMode: 'contain' }} />
      <View style={tailwind('flex-row justify-between mt-5')}>
        <View>
          <Text style={tailwind('text-2xl font-bold')}>Nike</Text>
          <Text style={tailwind('text-2xl font-bold')}>{`$${'10'}`}</Text>
        </View>
        <View style={tailwind('flex-row')}>
          <TouchableOpacity style={tailwind('mr-4')}>
            <Ionicons name='heart' size={30} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='share-social' size={30} color='gray' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tailwind('mt-7')}>
        <Text style={tailwind('text-xl font-bold text-gray-600')}>Description</Text>
        <Text style={tailwind('text-lg font-semibold text-gray-600')}>
          test     
        </Text>
      </View>
    </View>
  )
}
