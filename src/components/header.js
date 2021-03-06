import React from 'react';
import {View, StatusBar} from 'react-native';
import tailwind from 'tailwind-rn';

export default function header(props) {
  return (
    <View
      style={
        props.style === true
          ? tailwind('flex-row bg-red-300 justify-evenly items-center rounded-b-3xl p-4 pb-7')
          : tailwind(
              'flex-row bg-white justify-between items-center border-b border-gray-200 p-4',
            )
      }>
      <StatusBar
        backgroundColor={props.style === true ? '#FCA5A5' : 'white'}
        barStyle="dark-content"
      />
      {props.children}
    </View>
  );
}
