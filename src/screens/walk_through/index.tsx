import React, { useState, useRef } from 'react';
import Swiper from 'react-native-swiper';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-community/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/button';
import { useTheme } from '../../theme';
import { NavigationInterface } from '../types';
import boxShadow from '../../utils/boxShadows';

import {
  Container,
  LogoContainer,
  HeaderTitle,
  HeaderSubContent,
  VectorOneIllustrator,
  VectorTwoIllustrator
} from './styles';
import { USER_FIRST_LAUNCH } from '../../constants';

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
        <Container>
          <LogoContainer
            style={[
              boxShadow({
                elevation: 3,
                height: 3,
                shadowColor: colors.BOX_SHADOW_COLOR
              })
            ]}
          >
            <Image
              style={{ width: RFValue(35), height: RFValue(35) }}
              source={require('../../../assets/images/app_logo.png')}
              resizeMode="contain"
            />
          </LogoContainer>

          <HeaderTitle>On-site & Remote position available</HeaderTitle>
          <HeaderSubContent>
            Gain access to your dream jobs across the globe from the confides of
            your home.
          </HeaderSubContent>

          <VectorOneIllustrator
            source={require('../../../assets/images/walk_through_one.png')}
            resizeMode="contain"
          />

          <Button
            title="next"
            onPress={handleNextButton}
            buttonStyle={{
              width: RFValue(120),
              height: RFValue(40),
              borderRadius: RFValue(40),
              position: 'absolute',
              bottom: 20,
              right: 20
            }}
          />
        </Container>

        <Container>
          <LogoContainer
            style={[
              boxShadow({
                elevation: 3,
                height: 3,
                shadowColor: colors.BOX_SHADOW_COLOR
              })
            ]}
          >
            <Image
              style={{ width: RFValue(35), height: RFValue(35) }}
              source={require('../../../assets/images/app_logo.png')}
              resizeMode="contain"
            />
          </LogoContainer>

          <HeaderTitle>Nomads stop point</HeaderTitle>
          <HeaderSubContent>Your job search Ends here!.</HeaderSubContent>

          <VectorTwoIllustrator
            source={require('../../../assets/images/walk_through_two.png')}
            resizeMode="contain"
          />

          <Button
            title="Get started"
            onPress={handleDoneButton}
            buttonStyle={{
              width: RFValue(120),
              height: RFValue(40),
              borderRadius: RFValue(40),
              position: 'absolute',
              bottom: 20,
              right: 20
            }}
            textStyle={{ textTransform: 'none' }}
          />
        </Container>
      </Swiper>
    </SafeAreaView>
  );
}
