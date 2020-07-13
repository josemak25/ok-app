import { Image } from 'react-native';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

type FontType = { [name: string]: Font.FontSource };

export default async function AppLoading() {
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

  return Promise.all([...imageAssets, ...fontAssets]);
}
