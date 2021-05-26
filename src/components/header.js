import React from 'react';
import {View} from 'react-native';
import tailwind from 'tailwind-rn';

export default function header(props) {
  return (
    <View
      style={
        props.style === true
          ? tailwind('flex bg-red-400 p-5')
          : tailwind('flex bg-white border-b border-gray-100 p-5')
      }>
      {props.children}
    </View>
  );
}
