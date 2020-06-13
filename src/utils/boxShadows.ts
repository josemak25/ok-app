import { StyleSheet } from 'react-native';
import { theme } from '../theme/types';
import hexToRGB from './hexToRGB';

interface BoxShadowInterface {
  elevation: number;
  shadowColor?: string;
  shadowOpacity?: number;
  shadowRadius?: number;
  width?: number;
  height?: number;
}

function createBoxShadowStyle({
  elevation,
  shadowColor = hexToRGB(theme.colors.BOX_SHADOW_COLOR, 0.65),
  shadowOpacity = 0.4,
  shadowRadius = Math.floor((0.8 * elevation) / 2),
  width = 0,
  height = 0.5 * elevation
}: BoxShadowInterface) {
  return {
    elevation,
    shadowColor,
    shadowOpacity,
    shadowRadius,
    shadowOffset: { width, height }
  };
}

export default function boxShadow(properties: BoxShadowInterface) {
  const { shadow } = StyleSheet.create({
    shadow: createBoxShadowStyle(properties)
  });
  return shadow;
}
