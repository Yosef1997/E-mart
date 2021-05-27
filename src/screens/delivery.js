import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Ionicons from 'react-native-vector-icons/Ionicons';
import tailwind from 'tailwind-rn';
import { useForm, Controller } from 'react-hook-form';
import CardCart from '../components/cardCart'

const order = () => {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View style={tailwind('bg-white flex-1')}>
      <View style={tailwind('flex-row items-center bg-white p-5 border-b border-gray-200')}>
        <TouchableOpacity onPress={() => navigation.goBack('')}>
          <Ionicons name="md-arrow-back" size={25} color={'grey'} />
        </TouchableOpacity>
        <Text style={tailwind('font-bold text-2xl ml-5')}>Delivery</Text>
      </View>
      <ScrollView style={tailwind('bg-white px-5')}>
        <CardCart />
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
          rules={{ required: true }}
          defaultValue=""
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Ionicons name="ios-enter" size={25} color="gray" />
        </TouchableOpacity>
      </View>
      {errors.fullName && <Text style={tailwind('text-sm text-red-500')}>Full name is required.</Text>}

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
          rules={{ required: true }}
          defaultValue=""
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Ionicons name="ios-enter" size={25} color="gray" />
        </TouchableOpacity>
      </View>
      {errors.email && <Text style={tailwind('text-sm text-red-500')}>Email is required.</Text>}

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
          rules={{ required: true }}
          defaultValue=""
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <Ionicons name="ios-enter" size={25} color="gray" />
        </TouchableOpacity>
      </View>
      {errors.phoneNumber && <Text style={tailwind('text-sm text-red-500')}>Phone number is required.</Text>}

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
          rules={{ required: true }}
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
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.nameAddress && <Text style={tailwind('text-sm text-red-500')}>Address information is required.</Text>}
        {errors.detailAddress && <Text style={tailwind('text-sm text-red-500')}>Detail Address is required.</Text>}
        <View style={tailwind('flex-row items-center justify-end w-full mt-4')}>
          <TouchableOpacity>
            <Ionicons name='ios-trash' size={25} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={tailwind('rounded-3xl bg-red-500 ml-3 p-3')}>
            <Text style={tailwind('text-white font-bold')}>Add address</Text>
          </TouchableOpacity>
        </View>
      </View>

        <View style={tailwind('border border-gray-200 rounded-3xl mt-8 p-5')}>
          <View style={tailwind('flex-row justify-between')}>
            <Text style={tailwind('font-semibold text-lg text-gray-400')}>Quantity</Text>
            <Text style={tailwind('font-semibold text-xl')}>{1}</Text>
          </View>
          <View style={tailwind('flex-row justify-between mt-3')}>
            <Text style={tailwind('font-semibold text-lg text-gray-400')}>Total</Text>
            <Text style={tailwind('font-bold text-2xl ')}>{`$${'10'}`}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={tailwind('relative bottom-0 bg-white w-full p-5')}>
        <TouchableOpacity onPress={()=>navigation.navigate('Payment')} style={tailwind('rounded-3xl bg-red-500 p-3')}>
          <Text style={tailwind('text-white text-center text-lg font-bold')}>Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default order;
