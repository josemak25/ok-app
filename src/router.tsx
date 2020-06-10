import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from './theme';
import HomeNavigator from './navigator/HomeNavigator';

const RootStack = createStackNavigator();

import Screens from './screens';

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

        <RootStack.Screen name="HomeScreen" component={HomeNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
