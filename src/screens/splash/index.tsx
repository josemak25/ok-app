import React from 'react';
import { Container } from './styles';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

interface SplashScreenProps extends NavigationInterface {
  testID?: string;
}

export default function SplashScreen(props: SplashScreenProps) {
  return (
    <Container>
      <Button title="splash screen" />
    </Container>
  );
}
