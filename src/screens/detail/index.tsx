import React from 'react';
import { Container } from './styles';
import Button from '../../components/button';
import { NavigationInterface } from '../types';

interface DetailScreenProps extends NavigationInterface {
  testID?: string;
}

export default function DetailScreen(props: DetailScreenProps) {
  return (
    <Container>
      <Button title="detail screen" />
    </Container>
  );
}
