import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useForm, Controller } from 'react-hook-form';
import tailwind from 'tailwind-rn';
import {useUser} from '../zustand/store'
import Default from '../assets/profile.png'

export default function Profile() {
  const { control, handleSubmit } = useForm();
  const addUser = useUser ((state)=>state.addUser)
  const user = useUser ((state)=>state.user)

  const onSubmit = (data) => {
    addUser(data)
  };
  return (
    <ScrollView style={tailwind('px-5')}>
      <View style={tailwind('flex-row items-center border border-gray-200 rounded-3xl w-full p-5 mt-5')}>
        <TouchableOpacity style={{ height: 50, width: 50, borderRadius: 16, marginRight: 16 }}>
          <Image source={Default} style={{ resizeMode: 'contain', height: 50, width: 50 }} />
        </TouchableOpacity>
        <View>
          <Text style={tailwind('text-xl mb-1')}>{user !== null ? user.fullName: 'Name'}</Text>
          <Text style={tailwind('text-xl')}>Member Gold</Text>
        </View>
      </View>

      <Text style={tailwind('text-lg font-semibold mt-5 mb-2')}>Full Name</Text>
      <View style={tailwind('flex-row items-center bg-gray-50 rounded-2xl px-2')}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tailwind('h-10 flex-1 bg-gray-50')}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="fullName"
          defaultValue=""
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Ionicons name="ios-enter" size={25} color="gray" />
        </TouchableOpacity>
      </View>


      <Text style={tailwind('text-lg font-semibold mt-5 mb-2')}>Email</Text>
      <View style={tailwind('flex-row items-center bg-gray-50 rounded-2xl px-2')}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tailwind('h-10 flex-1 bg-gray-50')}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
          defaultValue=""
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Ionicons name="ios-enter" size={25} color="gray" />
        </TouchableOpacity>
      </View>

      <Text style={tailwind('text-lg font-semibold mt-5 mb-2')}>Phone Number</Text>
      <View style={tailwind('flex-row items-center bg-gray-50 rounded-2xl px-2')}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tailwind('h-10 flex-1 bg-gray-50')}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="phoneNumber"
          defaultValue=""
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Ionicons name="ios-enter" size={25} color="gray" />
        </TouchableOpacity>
      </View>

      <Text style={tailwind('text-lg font-semibold mt-5 mb-2')}>Address</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tailwind('h-10 flex-1 rounded-3xl bg-gray-50 px-4 mt-3')}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="nameAddress"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={tailwind('h-10 flex-1 rounded-3xl bg-gray-50 px-4 mt-3')}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="detailAddress"
          defaultValue=""
        />
        <View style={tailwind('flex-row items-center justify-end w-full mt-4')}>
          <TouchableOpacity>
            <Ionicons name='ios-trash' size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={tailwind('rounded-3xl bg-red-500 ml-3 p-3')}>
            <Text style={tailwind('text-white font-bold')}>Add address</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
