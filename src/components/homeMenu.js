import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';

export default function homeMenu() {
  const [icon, setIcon] = useState([{ label: 'grid', name:'Category' }, { label: 'ios-pricetags', name:'Sales' }, { label: 'ios-sync-circle', name:'Top up' }, { label: 'ios-gift', name:'Offers' }])
  return (
    <View style={tailwind('flex-row justify-around')}>
      {icon.map(items => {
        return (
          <TouchableOpacity key={items.name}>
            <Ionicons name={items.label} size={30} style={tailwind('bg-red-50 rounded-3xl p-5 mt-7')} />
            <Text style={tailwind('text-center font-semibold mt-1')}>{items.name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
