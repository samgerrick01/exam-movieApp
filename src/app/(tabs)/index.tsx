import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
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
            <TouchableOpacity onPress={() => {}}>
              <Ionicons name='search-circle-outline' size={36} color='white' />
            </TouchableOpacity>
          </View>

          {/* Movie Card */}
        </View>

        <ScrollView>
          {/* Trending Movies */}
          {/* {trending?.length > 0 && <TrendingMovies data={trending} />} */}

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
