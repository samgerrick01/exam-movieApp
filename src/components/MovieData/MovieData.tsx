import { MovieDataType } from '@src/lib/types';
import { RootState } from '@src/redux/store';
import dayjs from 'dayjs';
import React from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import Actors from './Actors';
import ReviewCard from './ReviewCard';

type MovieDataProps = {
  singleMovie: MovieDataType | null;
  width: number;
  title: () => string;
  id: string;
};

const MovieData = (props: MovieDataProps) => {
  const { singleMovie, width, title, id } = props;
  const { trendingMovies, results } = useSelector(
    (state: RootState) => state.movies
  );

  const getImage = (id: string) => {
    const image =
      trendingMovies.find((movie) => movie['#IMDB_ID'] === id)?.[
        '#IMG_POSTER'
      ] || results.find((movie) => movie['#IMDB_ID'] === id)?.['#IMG_POSTER'];
    if (image === undefined) {
      if (singleMovie?.image) {
        return singleMovie.image;
      } else {
        return 'https://i.imgur.com/uv0veq8.jpeg';
      }
    }
    return image;
  };

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    singleMovie && (
      <ScrollView className='flex-1'>
        {getImage(id) === 'default' ? (
          <Image
            source={require('@assets/images/default.png')}
            width={width}
            height={500}
            resizeMode='cover'
          />
        ) : (
          <Image
            source={{ uri: getImage(id) }}
            style={{ width, aspectRatio: 2 / 3 }}
            resizeMode='cover'
          />
        )}

        <View
          className='space-y-3 flex-1 relative  mt-[-98] overflow-hidden'
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <ImageBackground
            className='w-full h-full absolute'
            source={require('@assets/images/homescreen1.png')}
            resizeMode='cover'
          />
          <View className='p-5'>
            <Text className='text-2xl text-white font-soraBold'>{title()}</Text>
            {singleMovie?.genre && (
              <View className='flex-row gap-1'>
                {singleMovie?.genre.map((item, index, array) => {
                  let showDot = index !== array.length - 1;
                  return (
                    <Text
                      key={index}
                      className='text-sm text-gray-500 font-poppins'
                    >
                      {item}
                      {showDot ? ' •' : null}
                    </Text>
                  );
                })}
              </View>
            )}
            {singleMovie?.aggregateRating && (
              <View
                className='bg-blue-500 rounded p-1 justify-center mt-2'
                style={{
                  width: `${singleMovie?.aggregateRating?.ratingValue * 10}%`,
                }}
              >
                <Text className='text-white font-poppins'>
                  {`${singleMovie?.aggregateRating?.ratingValue * 10}%`}
                  {'     '}
                  {dayjs(singleMovie?.datePublished).format('YYYY')}
                </Text>
              </View>
            )}

            <View className='flex-1 p-2'>
              <Text className='text-white text-sm font-poppins'>
                {singleMovie?.description &&
                  singleMovie?.description
                    .replaceAll('&quot;', '"')
                    .replaceAll('&apos;', "'")
                    .replaceAll('&amp;', '&')}
              </Text>
            </View>
            <View>
              <Text className='text-white text-lg font-soraBold'>Actors</Text>
              <Actors singleMovie={singleMovie} openLink={openLink} />
              <Text className='text-white text-lg font-soraBold'>Reviews</Text>
              {singleMovie?.review ? (
                <ReviewCard {...singleMovie} />
              ) : (
                <Text className='text-white text-sm font-poppins'>NA</Text>
              )}
              <Text className='text-white text-lg font-soraBold'>Keywords</Text>
              <Text className='text-white text-sm font-poppins'>
                {singleMovie?.keywords
                  ? singleMovie?.keywords.replaceAll(',', ' • ')
                  : 'NA'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  );
};

export default MovieData;
