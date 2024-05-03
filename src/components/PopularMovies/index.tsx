import { MovieType } from '@src/lib/types';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MovieItem from './MovieItem';
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setPage } from '@src/redux/movieSlice';

type TrendingMoviesProps = {
  movies: MovieType[];
  title: string;
};

const PopularMovies = (props: TrendingMoviesProps) => {
  const dispatch = useDispatch();
  const { movies, title } = props;

  const handleClick = (item: MovieType) => {
    dispatch(setPage('home'));
    router.push(`/(tabs)/home/${item['#IMDB_ID']}`);
  };
  return (
    <View className='h-[75%]'>
      <Text className='text-white text-2xl font-bold mx-4 mt-4'>{title}</Text>

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
