import 'styled-components';

// All app colors
enum COLORS {
  DARK_BG_COLOR = '#F8FBFB',
  WHITE_BG_COLOR = '#FFFFFF',
  BLACK_FONT_COLOR = '#323B43',
  WHITE_FONT_COLOR = '#FFFFFF',
  ACTION_BG_COLOR = '#ff4742',
  INACTIVE_BG_COLOR = '#E2E6ED',
  VERIFIED_COLOR = '#36E67F',
  BOX_SHADOW_COLOR = '#A1AEB9'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 10,
  MEDIUM_SIZE = 14,
  LARGE_SIZE = 18,
  CORE_SANS_REGULAR = 'core-sans-regular',
  CORE_SANS_MEDIUM = 'core-sans-medium',
  CORE_SANS_BOLD = 'core-sans-bold',
  FONT_WEIGHT_LIGHT = 200,
  FONT_WEIGHT_MEDIUM = 600,
  FONT_WEIGHT_HEAVY = 800
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      DARK_BG_COLOR: string;
      WHITE_BG_COLOR: string;
      BLACK_FONT_COLOR: string;
      WHITE_FONT_COLOR: string;
      ACTION_BG_COLOR: string;
      VERIFIED_COLOR: string;
      INACTIVE_BG_COLOR: string;
      BOX_SHADOW_COLOR: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      LARGE_SIZE: number;
      CORE_SANS_REGULAR: string;
      CORE_SANS_MEDIUM: string;
      CORE_SANS_BOLD: string;
      FONT_WEIGHT_LIGHT: number;
      FONT_WEIGHT_MEDIUM: number;
      FONT_WEIGHT_HEAVY: number;
    };
  }
}

// App theme
export const theme = { colors: COLORS, fonts: FONTS };
