import { MovieType } from '@src/lib/types';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MovieItem from '../PopularMovies/MovieItem';
import { router } from 'expo-router';

type TrendingMoviesProps = {
  movies: MovieType[];
  height?: string;
};

const SavedMovies = (props: TrendingMoviesProps) => {
  const { movies, height } = props;

  const handleClick = (item: MovieType) => {
    router.push(`/(tabs)/home/${item['#IMDB_ID']}`);
  };
  return (
    <View className={`${height ? height : 'h-[90%]'}`}>
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

export default SavedMovies;
