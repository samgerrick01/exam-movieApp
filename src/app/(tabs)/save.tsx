import { PopularMovies, SavedMovies } from '@src/components';
import { RootState } from '@src/redux/store';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

const SaveScreen = () => {
  const { savedMovies } = useSelector((state: RootState) => state.movies);

  return (
    <View className='flex-1'>
      <Image
        className='w-full h-full absolute'
        source={require('@assets/images/homescreen1.png')}
        resizeMode='cover'
      />
      <View>
        <Text className='text-white text-2xl font-bold mx-4 mt-4'>
          Saved Movies
        </Text>
        {savedMovies?.length > 0 && <SavedMovies movies={savedMovies} />}
      </View>
    </View>
  );
};

export default SaveScreen;
