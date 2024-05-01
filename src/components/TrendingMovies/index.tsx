import { View, Text, FlatList, Dimensions } from 'react-native';
import React from 'react';
import { MovieType } from '@src/lib/types';
import Carousal from 'react-native-snap-carousel';
import MovieCard from './MovieCard';

type TrendingMoviesProps = {
  movies: MovieType[];
};

var { width } = Dimensions.get('window');

const TrendingMovies = (props: TrendingMoviesProps) => {
  const { movies } = props;

  const handleClick = (item: any) => {
    console.log('Movie Clicked', item);
  };

  return (
    <View>
      <Carousal
        data={movies}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.8}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  );
};

export default TrendingMovies;
