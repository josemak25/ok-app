import { StackScreenProps } from '@react-navigation/stack';

// App Navigation prop types
export type RootStackParamList = {
  SplashScreen: undefined;
  HomeScreen: undefined;
  WalkThroughScreen: undefined;
  DetailScreen: { jobLink: string };
};

export type NavigationInterface = StackScreenProps<RootStackParamList>;
