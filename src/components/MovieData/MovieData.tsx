import { MovieDataType } from '@src/lib/types';
import dayjs from 'dayjs';
import React from 'react';
import { Image, Linking, ScrollView, Text, View } from 'react-native';
import Actors from './Actors';
import ReviewCard from './ReviewCard';

type MovieDataProps = {
  singleMovie: MovieDataType | null;
  width: number;
};

const openLink = (url: string) => {
  Linking.openURL(url);
};

const MovieData = (props: MovieDataProps) => {
  const { singleMovie, width } = props;
  return (
    singleMovie && (
      <ScrollView className='flex-1'>
        <Image
          source={{ uri: singleMovie?.image }}
          style={{ width, aspectRatio: 2 / 3 }}
          resizeMode='cover'
        />
        <View
          className='space-y-3 flex-1 bg-slate-300 relative py-4 mt-[-98] overflow-hidden'
          style={{
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          }}
        >
          <View className='p-5'>
            <Text className='text-2xl text-black font-soraBold'>
              {singleMovie?.name}
            </Text>
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
            <View
              className='bg-blue-500 rounded p-1 justify-center mt-2'
              style={{
                width: `${singleMovie?.aggregateRating?.ratingValue * 10}%`,
              }}
            >
              <Text className='text-black font-poppins'>
                {`${singleMovie?.aggregateRating?.ratingValue * 10}%`}
                {'     '}
                {dayjs(singleMovie?.datePublished).format('YYYY')}
              </Text>
            </View>
            <View className='flex-1 p-2'>
              <Text className='text-black text-sm font-poppins'>
                {singleMovie?.description
                  .replaceAll('&quot;', '"')
                  .replaceAll('&apos;', "'")
                  .replaceAll('&amp;', '&')}
              </Text>
            </View>
            <View>
              <Text className='text-black text-lg font-soraBold'>Actors</Text>
              <Actors singleMovie={singleMovie} openLink={openLink} />
              <Text className='text-black text-lg font-soraBold'>Reviews</Text>
              <ReviewCard {...singleMovie} />
              <Text className='text-black text-lg font-soraBold'>Keywords</Text>
              <Text className='text-black text-sm font-poppins'>
                {singleMovie?.keywords.replaceAll(',', ' • ')}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  );
};

export default MovieData;
