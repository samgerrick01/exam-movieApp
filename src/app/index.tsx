import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const index = () => {
  return (
    <View className='flex-1 justify-end items-center space-y10 relative'>
      <StatusBar style='auto' hidden />
      <Image
        source={require('@assets/images/welcome.png')}
        className=' w-full h-full absolute'
        resizeMode='cover'
      />
      {/* Title and Button */}
      <View className='flex justify-center items-center py-28 max-w-[80%]'>
        <View className='bg-red-600 p-4 rounded-3xl'>
          <Text className='text-white text-4xl font-extrabold tracking-widest my-4'>
            DXB
          </Text>
        </View>
        <Text className='text-white text-4xl font-bold tracking-widest my-4'>
          Movie App
        </Text>

        <Text className='text-white tracking-widest mb-2 text-lg text-center font-medium'>
          Watch and find movies that bring your mood back.
        </Text>
      </View>
      <View className='my-4 mb-36'>
        <TouchableOpacity
          className='px-12 py-3 rounded-lg bg-red-600'
          onPress={() => router.push('/(tabs)/')}
        >
          <Text className='text-white text-lg font-medium'>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default index;
