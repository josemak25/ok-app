import React, { useState, useRef } from 'react';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme';
import { NavigationInterface } from '../types';
import { USER_FIRST_LAUNCH } from '../../constants';

import WalkThroughOne from './walk_through_one';
import WalkThroughTwo from './walk_through_two';

interface SplashScreenProps extends NavigationInterface {
  testID?: string;
}

export default function WalkThroughScreen({ navigation }: SplashScreenProps) {
  const { colors } = useTheme();

  const [currentSlide, setCurrentSlide] = useState(0);

  const swiperRef = useRef<any>(null);

  const handleNextButton = () => {
    const nextScrollIndex = currentSlide + 1;
    swiperRef.current.scrollBy(nextScrollIndex, true);
    handleSlideChange(nextScrollIndex);
  };

  const handleDoneButton = async () => {
    await AsyncStorage.setItem(USER_FIRST_LAUNCH, '1');
    return navigation.replace('HomeScreen');
  };

  const handleSlideChange = (index: number) => setCurrentSlide(index);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_BG_COLOR
      }}
    >
      <Swiper
        ref={swiperRef}
        loop={false}
        activeDotColor={colors.ACTION_BG_COLOR}
        dotColor={colors.INACTIVE_BG_COLOR}
        activeDotStyle={{ width: 30 }}
        onIndexChanged={handleSlideChange}
        paginationStyle={{
          justifyContent: 'flex-start',
          paddingLeft: 20,
          paddingBottom: 10
        }}
      >
        <WalkThroughOne handleNextButton={handleNextButton} />
        <WalkThroughTwo handleDoneButton={handleDoneButton} />
      </Swiper>
    </SafeAreaView>
  );
}
