import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import loadResources from './src/libs/loadResources';
import AppRouter from './src';

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    (async () => {
      await SplashScreen.preventAutoHideAsync();
      await loadResources();
      await SplashScreen.hideAsync();
      setIsAppReady(true);
    })();
  }, []);

  return isAppReady ? <AppRouter /> : null;
}
