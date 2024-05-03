import { View, Text } from 'react-native';
import React from 'react';
import { MovieDataType } from '@src/lib/types';
type ActorsProps = {
  singleMovie: MovieDataType;
  openLink: (url: string) => void;
};
const Actors = (props: ActorsProps) => {
  const { singleMovie, openLink } = props;
  return (
    <View className='gap-1'>
      {singleMovie?.actor.map((item, index) => (
        <Text
          onPress={() => openLink(item.url)}
          key={index}
          className='text-blue-500 text-lg font-poppins'
        >
          • {item.name}
        </Text>
      ))}
    </View>
  );
};

export default Actors;
