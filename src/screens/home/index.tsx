import React from 'react';
import { Container } from './styles';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

interface HomeScreenProps extends NavigationInterface {
  testID?: string;
}

export default function HomeScreen(props: HomeScreenProps) {
  return (
    <Container>
      <Button title="home screen" buttonStyle={{ padding: 15 }} />
    </Container>
  );
}
