import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <StatusBar style='auto' hidden />
      <Text className=' text-red-500'>Test App</Text>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
