import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './router';
import { StoreProvider } from './store';
import ThemeProvider from './theme';

export default function AppRouter() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </ThemeProvider>
    </StoreProvider>
  );
}
