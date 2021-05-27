import React, {useState} from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core';
import tailwind from 'tailwind-rn';
import DropDown from '../components/dropdown'

const payment = () => {
  const navigation = useNavigation();

  const [method, setMethod] =useState([{label:'BNI', id:'1'},{label:'OVO', id:'2'}])

  return (
    <View style={tailwind('bg-white flex-1')}>
      <View style={tailwind('flex-row items-center bg-white p-5 border-b border-gray-200')}>
        <TouchableOpacity onPress={() => navigation.goBack('')}>
          <Ionicons name="md-arrow-back" size={25} color={'grey'} />
        </TouchableOpacity>
        <Text style={tailwind('font-bold text-2xl ml-5')}>Payment</Text>
      </View>
      <ScrollView  style={tailwind('bg-white px-5')}>
        <Text style={tailwind('text-lg font-semibold mt-5 mb-2')}>Payment Detail</Text>
        <View style={tailwind('border border-gray-200 rounded-3xl mt-3 p-5')}>
          <View style={tailwind('flex-row justify-between')}>
            <Text style={tailwind('font-semibold text-lg text-gray-400')}>Quantity</Text>
            <Text style={tailwind('font-semibold text-xl')}>{1}</Text>
          </View>
          <View style={tailwind('flex-row justify-between mt-3')}>
            <Text style={tailwind('font-semibold text-lg text-gray-400')}>Delivery fee</Text>
            <Text style={tailwind('font-semibold text-xl ')}>{`$${'10'}`}</Text>
          </View>
          <View style={tailwind('flex-row justify-between mt-3')}>
            <Text style={tailwind('font-semibold text-lg text-gray-400')}>Total</Text>
            <Text style={tailwind('font-bold text-2xl ')}>{`$${'20'}`}</Text>
          </View>
        </View>
        <Text style={tailwind('text-lg font-semibold mt-5 mb-2')}>Payment Method</Text>
        <DropDown label='Choose payment method' data={method} />
      </ScrollView>
      <View style={tailwind('relative bottom-0 bg-white w-full p-5')}>
        <TouchableOpacity onPress={()=>navigation.navigate('Payment')} style={tailwind('rounded-3xl bg-red-500 p-3')}>
          <Text style={tailwind('text-white text-center text-lg font-bold')}>Purchase</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default payment
