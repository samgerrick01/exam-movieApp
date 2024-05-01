import {
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import { MovieType } from '@src/lib/types';

var { width, height } = Dimensions.get('window');

type MovieCardProps = {
  item: MovieType;
  handleClick: (item: any) => void;
};

export default function MovieCard(props: MovieCardProps) {
  const { item, handleClick } = props;
  // console.log("Movie Image", item.poster_path);

  console.log('Movie Image', item['#IMDB_URL']);
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{
          uri: item['#IMG_POSTER'],
        }}
        style={{
          width: width * 0.8,
          height: height * 0.25,
        }}
        resizeMode='cover'
        className='rounded-3xl'
      />
    </TouchableWithoutFeedback>
  );
}