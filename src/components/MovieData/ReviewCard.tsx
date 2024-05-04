import { View, Text, Animated, Easing, Pressable } from 'react-native';
import React, { useState } from 'react';
import { MovieDataType } from '@src/lib/types';
import dayjs from 'dayjs';
import { FontAwesome } from '@expo/vector-icons';

const ReviewCard = (singleMovie: MovieDataType) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [spinValue] = useState(new Animated.Value(0));

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const animateIcon = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(spinValue, {
      toValue: isExpanded ? 0 : 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className='bg-white p-4 rounded-lg shadow shadow-black'>
      <View>
        <View className='flex-row justify-between'>
          <Text className='text-black font-poppins w-[90%]' numberOfLines={1}>
            {singleMovie?.review.author.name}
          </Text>
          <Pressable onPress={animateIcon}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <FontAwesome name={'chevron-down'} size={24} color={'cyan'} />
            </Animated.View>
          </Pressable>
        </View>
        <Text className='text-gray-500 font-poppins text-xs'>
          {dayjs(singleMovie?.review.dateCreated).format('MMM DD, YYYY')}
        </Text>
        {singleMovie?.review?.reviewRating && (
          <Text>
            <FontAwesome name='star' color='#FFC500' />{' '}
            {singleMovie?.review?.reviewRating?.ratingValue}/
            {singleMovie?.review?.reviewRating?.bestRating}
          </Text>
        )}

        <Animated.View>
          <Text
            className='text-black font-sora'
            numberOfLines={isExpanded ? 0 : 3}
          >
            {singleMovie?.review?.reviewBody
              .replaceAll('&quot;', '"')
              .replaceAll('&apos;', "'")
              .replaceAll('&amp;', '&')}
          </Text>
        </Animated.View>
      </View>
    </View>
  );
};

export default ReviewCard;
