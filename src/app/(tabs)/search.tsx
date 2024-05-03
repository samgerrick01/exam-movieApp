import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

const SearchScreen = () => {
  return (
    <View className='flex-1'>
      <Image
        className='w-full h-full absolute'
        source={require('@assets/images/homescreen2.png')}
        resizeMode='cover'
      />
      <View className='p-5'>
        <View className='w-full p-2 rounded-lg border border-black bg-white'>
          <TextInput
            className='text-black text-lg font-poppins'
            placeholder='Search for your favorite movies'
            placeholderTextColor={'grey'}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
