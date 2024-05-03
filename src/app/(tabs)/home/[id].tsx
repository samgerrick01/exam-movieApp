import { Entypo, FontAwesome } from '@expo/vector-icons';
import { useSelectSingleMovie } from '@src/api';
import { MovieData } from '@src/components';
import { setSingleMovie } from '@src/redux/movieSlice';
import { RootState } from '@src/redux/store';
import { Stack, router, useLocalSearchParams } from 'expo-router';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');

const SingleMovieScreen = () => {
  const dispatch = useDispatch();
  const { id: idString } = useLocalSearchParams();
  const { data, isFetching } = useSelectSingleMovie(idString as string);
  const { singleMovie } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (data) dispatch(setSingleMovie(data));
  }, [isFetching]);
  console.log(idString);
  return (
    <View className='flex-1'>
      <Stack.Screen options={{ headerShown: false }} />
      <View className='z-20 w-full flex-row justify-between items-center px-4 mt-12 absolute'>
        <TouchableOpacity
          className='bg-[#2496ff] p-2 rounded-full items-center justify-center'
          onPress={() => {
            dispatch(setSingleMovie(null));
            router.back();
          }}
        >
          <Entypo name='chevron-left' size={24} color='white' />
        </TouchableOpacity>

        <TouchableOpacity
          className='bg-[#2496ff] p-2 rounded-full items-center justify-center'
          onPress={() => {}}
        >
          <FontAwesome name='heart' size={24} color='white' />
        </TouchableOpacity>
      </View>
      {singleMovie === null ? (
        <View className='flex-1 justify-center items-center'>
          <ActivityIndicator size={50} color='#0000ff' />
        </View>
      ) : (
        <MovieData singleMovie={singleMovie} width={width} />
      )}
    </View>
  );
};

export default SingleMovieScreen;
