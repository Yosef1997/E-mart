/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-shadow */
import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';

export default function search() {
  const {control, handleSubmit} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View style={tailwind('flex-row items-center bg-white rounded-2xl px-2')}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={tailwind('h-10 flex-1 bg-white')}
            onBlur={onBlur}
            placeholder="search"
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="search"
        defaultValue=""
      />
      <TouchableOpacity onPress={handleSubmit(onSubmit)}>
        <Ionicons name="search-outline" size={25} color="gray" />
      </TouchableOpacity>
    </View>
  );
}
