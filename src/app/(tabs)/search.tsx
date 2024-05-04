import { SavedMovies } from '@src/components';
import { debounce } from 'lodash';
import React, { useEffect, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchMovies = async () => {
    if (!query) return;

    try {
      const response = await fetch(
        `https://search.imdbot.workers.dev/?q=${query}`
      );
      const data = await response.json();
      setResults(data.description);
    } catch (error) {
      console.error(error);
    }
  };

  const debouncedFetchMovies = debounce(fetchMovies, 300);

  useEffect(() => {
    debouncedFetchMovies();
    return () => {
      debouncedFetchMovies.cancel();
    };
  }, [query]);

  return (
    <View className='flex-1'>
      <Image
        className='w-full h-full absolute'
        source={require('@assets/images/homescreen2.png')}
        resizeMode='cover'
      />
      <View className='p-5'>
        <View className='w-full p-2 rounded-lg border border-black bg-white'>
          <TextInput
            className='text-black text-lg font-poppins'
            placeholder='Search for your favorite movies'
            placeholderTextColor={'grey'}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
        </View>
      </View>
      {results?.length !== 0 && (
        <Text className='text-white text-lg font-poppins p-5'>
          {results.length} Results for {query}
        </Text>
      )}
      <View>{results?.length > 0 && <SavedMovies movies={results} />}</View>
    </View>
  );
};

export default SearchScreen;
