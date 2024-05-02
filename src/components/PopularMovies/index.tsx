import { MovieType } from '@src/lib/types';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MovieItem from './MovieItem';

type TrendingMoviesProps = {
  movies: MovieType[];
};

const PopularMovies = (props: TrendingMoviesProps) => {
  const { movies } = props;

  const handleClick = (item: MovieType) => {
    console.log('Movie Clicked', item);
  };

  return (
    <View className='h-[75%]'>
      <Text className='text-white text-2xl font-bold mx-4 mt-4'>
        Popular Movies
      </Text>

      <FlatList
        data={movies}
        renderItem={({ item }: { item: MovieType }) => (
          <MovieItem item={item} handleClick={handleClick} />
        )}
        keyExtractor={(item) => item['#IMDB_ID']}
        numColumns={2}
        contentContainerStyle={{ gap: 10, padding: 10 }}
        columnWrapperStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default PopularMovies;
