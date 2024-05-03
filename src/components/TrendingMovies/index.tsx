import { View, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { MovieType } from '@src/lib/types';
// import Carousal from 'react-native-snap-carousel';
import MovieCard from './MovieCard';
import Carousel from 'react-native-reanimated-carousel';
import { router } from 'expo-router';

type TrendingMoviesProps = {
  movies: MovieType[];
};

const width = Dimensions.get('window').width;

const TrendingMovies = (props: TrendingMoviesProps) => {
  const { movies } = props;

  const handleClick = (item: MovieType) => {
    router.push(`/(tabs)/home/${item['#IMDB_ID']}`);
  };

  return (
    <View className='relative h-[35%]'>
      <Text className='text-white text-2xl font-bold mx-4 mt-4'>
        Trending Movies
      </Text>
      <View style={{ flex: 1, marginTop: 10 }}>
        <Carousel
          loop
          mode='parallax'
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 90,
            parallaxAdjacentItemScale: 0.7,
          }}
          width={width}
          height={width / 2}
          autoPlay={true}
          data={movies}
          scrollAnimationDuration={2000}
          renderItem={({ item }) => (
            <MovieCard item={item} handleClick={handleClick} />
          )}
        />
      </View>
    </View>
  );
};

export default TrendingMovies;
