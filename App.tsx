import React, { useState } from 'react';
import { enableScreens } from 'react-native-screens';
import AppLoading from './src/components/AppLoading';
import AppRouter from './src';

export default function App() {
  enableScreens();

  const [isAppReady, setIsAppReady] = useState(false);

  return isAppReady ? (
    <AppRouter />
  ) : (
    <AppLoading setIsAppReady={setIsAppReady} />
  );
}
