import { Entypo, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelectSingleMovie } from '@src/api';
import { MovieData } from '@src/components';
import {
  removeSavedMovie,
  saveSaveMoviesfromLocalStorage,
  setSavedMovies,
  setSingleMovie,
} from '@src/redux/movieSlice';
import { RootState } from '@src/redux/store';
import { Redirect, Stack, router, useLocalSearchParams } from 'expo-router';
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
  const { singleMovie, savedMovies, trendingMovies, results } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    if (data === null && !isFetching) {
      alert('Movie not found');
    } else {
      if (data) dispatch(setSingleMovie(data));
    }
  }, [isFetching]);

  const saveMovie = async () => {
    const movie = trendingMovies.find(
      (movie) => movie['#IMDB_ID'] === idString
    );

    if (movie) {
      if (checkIfSaved(idString as string)) {
        dispatch(removeSavedMovie(movie));
        await AsyncStorage.setItem(
          'savedMovies',
          JSON.stringify(savedMovies.filter((m) => m['#IMDB_ID'] !== idString))
        );
      } else {
        dispatch(setSavedMovies(movie));
        await AsyncStorage.setItem(
          'savedMovies',
          JSON.stringify([...savedMovies, movie])
        );
      }
    } else {
      const movie = results.find((movie) => movie['#IMDB_ID'] === idString);
      if (movie) {
        if (checkIfSaved(idString as string)) {
          dispatch(removeSavedMovie(movie));
          await AsyncStorage.setItem(
            'savedMovies',
            JSON.stringify(
              savedMovies.filter((m) => m['#IMDB_ID'] !== idString)
            )
          );
        } else {
          dispatch(setSavedMovies(movie));
          await AsyncStorage.setItem(
            'savedMovies',
            JSON.stringify([...savedMovies, movie])
          );
        }
      }
    }
  };

  const checkIfSaved = (id: string) => {
    if (savedMovies.length === 0) checkLocalStorage();
    return savedMovies.some((movie) => movie['#IMDB_ID'] === id);
  };

  const selectTheTitle = () => {
    let title = 'Title not found';
    if (singleMovie) {
      title =
        trendingMovies.find((movie) => movie['#IMDB_ID'] === idString)?.[
          '#TITLE'
        ] || singleMovie?.name;
    }
    return title;
  };

  const checkLocalStorage = async () => {
    const savedMovies = await AsyncStorage.getItem('savedMovies');
    if (savedMovies) {
      dispatch(saveSaveMoviesfromLocalStorage(JSON.parse(savedMovies)));
    }
  };

  return data === null ? (
    <Redirect href={'/(tabs)/home/'} />
  ) : (
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
          onPress={saveMovie}
        >
          <FontAwesome
            name='heart'
            size={24}
            color={checkIfSaved(idString as string) ? 'red' : 'white'}
          />
        </TouchableOpacity>
      </View>
      {singleMovie === null ? (
        <View className='flex-1 justify-center items-center'>
          <ActivityIndicator size={50} color='#0000ff' />
        </View>
      ) : (
        <MovieData
          id={idString as string}
          title={selectTheTitle}
          singleMovie={singleMovie}
          width={width}
        />
      )}
    </View>
  );
};

export default SingleMovieScreen;
