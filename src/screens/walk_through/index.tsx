import React from 'react';
import { Container } from './styles';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

interface SplashScreenProps extends NavigationInterface {
  testID?: string;
}

export default function WalkThroughScreen(props: SplashScreenProps) {
  return (
    <Container>
      <Button title="walk-through screen" />
    </Container>
  );
}
