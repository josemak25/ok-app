import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  TransitionPresets
} from '@react-navigation/stack';
import { useTheme } from './theme';
import Screens from './screens';

import HomeNavigator from './navigator/HomeNavigator';
import { RootStackParamList } from './screens/types';

const RootStack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  const { fonts, colors } = useTheme();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
          headerBackTitleStyle: {
            fontFamily: fonts.CORE_SANS_REGULAR,
            color: colors.BLACK_FONT_COLOR,
            fontSize: fonts.MEDIUM_SIZE,
            textTransform: 'capitalize'
          }
        }}
      >
        <RootStack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
        />

        <RootStack.Screen
          name="HomeScreen"
          component={HomeNavigator}
          options={{
            ...TransitionPresets.SlideFromRightIOS
          }}
        />

        <RootStack.Screen
          name="WalkThroughScreen"
          component={Screens.WalkThroughScreen}
          options={{
            ...TransitionPresets.SlideFromRightIOS
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
