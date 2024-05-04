import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useTrendingMovieList } from '@src/api';
import { PopularMovies, TrendingMovies } from '@src/components';
import { setTrendingMovies } from '@src/redux/movieSlice';
import { RootState } from '@src/redux/store';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data: trendingMoviesData, isFetched: trendingMoviesFetched } =
    useTrendingMovieList();
  const { trendingMovies } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (trendingMoviesData) dispatch(setTrendingMovies(trendingMoviesData));
  }, [trendingMoviesFetched]);
  console.log(trendingMovies);
  return (
    <View className='flex-1'>
      <Image
        className='w-full h-full absolute'
        source={require('@assets/images/homescreen1.png')}
        resizeMode='cover'
      />

      <View className='flex-row justify-between items-center mx-4 mg-4 mt-5'>
        <View className='border-2 border-white rounded-full overflow-hidden'>
          <Image
            source={require('@assets/images/avatar.png')}
            resizeMode='cover'
            className='h-[45] w-[45]'
          />
        </View>

        <View className='flex-row space-x-4 items-center'>
          <FontAwesome name='bell-o' size={30} color='white' />
          <TouchableOpacity onPress={() => router.push('/search')}>
            <Ionicons name='search-circle-outline' size={40} color='white' />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        {trendingMovies?.length > 0 && (
          <TrendingMovies movies={trendingMovies} />
        )}
      </View>

      <View>
        {trendingMovies?.length > 0 && (
          <PopularMovies title='Popular Movies' movies={trendingMovies} />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;
