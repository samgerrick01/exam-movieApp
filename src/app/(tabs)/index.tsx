import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useTrendingMovieList } from '@src/api';
import { TrendingMovies } from '@src/components';
import { setTrendingMovies } from '@src/redux/movieSlice';
import { RootState } from '@src/redux/store';
import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { data, isFetched } = useTrendingMovieList();
  const { trendingMovies } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    if (data) dispatch(setTrendingMovies(data));
  }, [isFetched]);

  return (
    <View className='flex-1'>
      <Image
        className='w-full h-full absolute'
        source={require('@assets/images/homescreen1.png')}
        resizeMode='cover'
      />
      <ScrollView className='mt-16'>
        {/* Welcome Title */}

        <View className='flex-row justify-between items-center mx-4 mg-4'>
          <View className='border-2 border-white rounded-full overflow-hidden'>
            <Image
              source={require('@assets/images/avatar.png')}
              style={{
                width: 45,
                height: 45,
              }}
              resizeMode='cover'
            />
          </View>

          {/* Notification and Search Icon */}
          <View className='flex-row space-x-4 items-center'>
            <FontAwesome name='bell-o' size={30} color='white' />
            <TouchableOpacity onPress={() => router.push('/search')}>
              <Ionicons name='search-circle-outline' size={36} color='white' />
            </TouchableOpacity>
          </View>

          {/* Movie Card */}
        </View>

        <ScrollView>
          {/* Trending Movies */}
          {trendingMovies?.length > 0 && (
            <TrendingMovies movies={trendingMovies} />
          )}

          {/* Popular Movies */}
          {/* {popular?.length > 0 && (
              <PopularMovie title="Popular" data={popular} />
            )} */}

          {/* Top Rated Movies */}
          {/* {topRated?.length > 0 && (
              <TopRatedMovies genre={genre} title="Top Rated" data={topRated} />
            )} */}

          {/* Upcoming Movies */}
          {/* {upcoming?.length > 0 && (
              <UpcomingMovie title="Upcoming" data={upcoming} />
            )} */}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
