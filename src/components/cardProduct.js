import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import tailwind from 'tailwind-rn';

export default function cardProduct(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={tailwind('h-72 w-40 bg-white border border-gray-200 rounded-2xl p-2 mt-10')}>
        <Image source={props.source} style={{resizeMode:'contain', height:'70%', width:'100%'}} />
        <Text style={tailwind('text-sm font-semibold w-full h-10 my-1')}>{props.title}</Text>
        <View style={tailwind('flex-row justify-between items-center')}>
          <Text style={tailwind('text-xl font-bold')}>{`$${props.price}`}</Text>
          <TouchableOpacity>
            <Fontisto name='shopping-basket-add' size={25} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}
