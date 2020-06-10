import React from 'react';
import { Image } from 'react-native';
import { AppLoading as ExpoAppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

type FontType = { [name: string]: Font.FontSource };
type AppLoadingProps = { setIsAppReady(T: boolean): void };

export default function AppLoading({ setIsAppReady }: AppLoadingProps) {
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
      require('../../../assets/splash.png')
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

  return (
    <ExpoAppLoading
      startAsync={loadAllAppAssets}
      onFinish={() => setIsAppReady(true)}
      onError={console.warn}
    />
  );
}
