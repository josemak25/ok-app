import { StackScreenProps } from '@react-navigation/stack';

// App Navigation prop types
type RootStackParamList = {
  HomeScreen: undefined;
  WalkThroughScreen: undefined;
  DetailScreen: { userId: string } | undefined;
};

export type NavigationInterface = StackScreenProps<RootStackParamList>;
