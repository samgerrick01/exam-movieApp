import AsyncStorage from '@react-native-async-storage/async-storage';
import { PopularMovies, SavedMovies } from '@src/components';
import {
  clearSavedMovies,
  saveSaveMoviesfromLocalStorage,
  setSavedMovies,
} from '@src/redux/movieSlice';
import { RootState } from '@src/redux/store';
import React, { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const SaveScreen = () => {
  const dispatch = useDispatch();
  const { savedMovies } = useSelector((state: RootState) => state.movies);

  const checkLocalStorage = async () => {
    const savedMovies = await AsyncStorage.getItem('savedMovies');
    if (savedMovies) {
      dispatch(saveSaveMoviesfromLocalStorage(JSON.parse(savedMovies)));
    }
  };

  useEffect(() => {
    if (savedMovies.length === 0) checkLocalStorage();
  }, []);

  return (
    <View className='flex-1'>
      <Image
        className='w-full h-full absolute'
        source={require('@assets/images/homescreen1.png')}
        resizeMode='cover'
      />
      <View>
        <View className='flex-row w-full justify-between p-5'>
          <Text className='text-white text-2xl font-bold '>Saved Movies</Text>
          {savedMovies?.length > 0 && (
            <TouchableOpacity
              onPress={async () => {
                dispatch(clearSavedMovies());
                await AsyncStorage.removeItem('savedMovies');
              }}
            >
              <Text className='text-white text-lg font-bold mx-4 mt-2'>
                Clear All
              </Text>
            </TouchableOpacity>
          )}
        </View>
        {savedMovies?.length > 0 && <SavedMovies movies={savedMovies} />}
      </View>
    </View>
  );
};

export default SaveScreen;
