import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto';
import tailwind from 'tailwind-rn';
import Logo from '../assets/icon.png'

export default function cardProduct(props) {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', flexWrap:'wrap', paddingHorizontal:20}}>
      <TouchableOpacity style={tailwind('h-72 w-40  border rounded-2xl p-2 mt-10')}>
        <Image source={Logo} style={{resizeMode:'contain', height:'75%', width:'100%', borderRadius:10, borderColor:'red'}} />
        <Text>Nike</Text>
        <View style={tailwind('flex-row justify-between')}>
          <Text>$10.00</Text>
          <TouchableOpacity>
            <Fontisto name='shopping-basket-add' size={25} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  )
}
