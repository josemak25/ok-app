import React from 'react';

import { Container, ButtonText } from './styles';

type ButtonProps = {
  buttonStyle?: {};
  textStyle?: {};
  testID?: string;
  title: string;
  onPress?(): void;
  activeOpacity?: number;
};

export default function Button(props: ButtonProps) {
  const { title, buttonStyle, textStyle, activeOpacity } = props;

  return (
    <Container {...props} activeOpacity={activeOpacity} style={buttonStyle}>
      <ButtonText style={textStyle}>{title}</ButtonText>
    </Container>
  );
}
