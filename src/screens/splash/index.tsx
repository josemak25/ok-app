import React, { useLayoutEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Container } from './styles';
import { NavigationInterface } from '../types';
import { USER_FIRST_LAUNCH } from '../../constants';

interface SplashScreenProps extends NavigationInterface {
  testID?: string;
}

export default function SplashScreen({ navigation }: SplashScreenProps) {
  useLayoutEffect(() => {
    checkInitialLaunch();
  }, []);

  const checkInitialLaunch = async () => {
    const firstTimeLaunch = await AsyncStorage.getItem(USER_FIRST_LAUNCH);

    if (!Boolean(firstTimeLaunch)) {
      return navigation.replace('WalkThroughScreen');
    }

    return navigation.replace('HomeScreen');
  };

  return <Container />;
}
