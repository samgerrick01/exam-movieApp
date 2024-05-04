import { MovieType } from '@src/lib/types';
import { RootState } from '@src/redux/store';
import React from 'react';
import {
  Dimensions,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';

var { width, height } = Dimensions.get('window');

type MovieItemProps = {
  item: MovieType;
  handleClick: (item: MovieType) => void;
};

const MovieItem = (props: MovieItemProps) => {
  const { item, handleClick } = props;

  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <View className='w-[48%]'>
        <Image
          source={{
            uri: item['#IMG_POSTER']
              ? item['#IMG_POSTER']
              : 'https://i.imgur.com/uv0veq8.jpeg',
          }}
          style={{
            width: width / 2.15,
            height: height / 3,
          }}
          resizeMode='cover'
          className='rounded-3xl'
        />
        <Text className='text-white text-center mt-2 w-[100%] text-lg'>
          {item['#TITLE']}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MovieItem;
