import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  HomeScreen: undefined;
  SplashScreen: undefined;
  DetailScreen: { userId: string } | undefined;
};

export type NavigationInterface = StackScreenProps<RootStackParamList>;

// App Navigation prop types
// export interface NavigationInterface extends NavigationScreenType {}
