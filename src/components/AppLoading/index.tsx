import React from 'react';
import { Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { AppLoading as ExpoAppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

type FontType = { [name: string]: Font.FontSource };
type AppLoadingProps = { setIsAppReady(T: boolean): void };

export default function AppLoading({ setIsAppReady }: AppLoadingProps) {
  SplashScreen.preventAutoHideAsync();

  const cacheImages = (images: number[]) => {
    return images.map((image) => {
      return typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts: FontType[]) => {
    return fonts.map((font) => Font.loadAsync(font));
  };

  const loadAllAppAssets = async () => {
    const imageAssets = cacheImages([
      require('../../../assets/icon.png'),
      require('../../../assets/splash.png'),
      require('../../../assets/images/app_logo.png'),
      require('../../../assets/images/walk_through_two.png'),
      require('../../../assets/images/walk_through_one.png')
    ]);

    const fontAssets = cacheFonts([
      {
        'core-sans-regular': require('../../../assets/fonts/CoreSansDSRegular.ttf')
      },
      {
        'core-sans-medium': require('../../../assets/fonts/CoreSansDSMedium.ttf')
      },
      {
        'core-sans-bold': require('../../../assets/fonts/CoreSansDSBold.ttf')
      }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  const handleComplete = () => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
      setIsAppReady(true);
    }, 500);
  };

  return (
    <ExpoAppLoading
      startAsync={loadAllAppAssets}
      onFinish={handleComplete}
      onError={console.warn}
    />
  );
}
