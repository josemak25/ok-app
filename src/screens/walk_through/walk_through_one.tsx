import React from 'react';
import { Image } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Button from '../../components/button';
import { useTheme } from '../../theme';
import boxShadow from '../../utils/boxShadows';

import {
  Container,
  LogoContainer,
  HeaderTitle,
  HeaderSubContent,
  VectorOneIllustrator
} from './styles';

interface WalkThroughOneProps {
  handleNextButton(): void;
}

export default function WalkThroughOne(props: WalkThroughOneProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <LogoContainer
        style={[
          boxShadow({
            elevation: 3,
            height: 3,
            shadowColor: colors.BOX_SHADOW_COLOR
          })
        ]}
      >
        <Image
          style={{ width: RFValue(35), height: RFValue(35) }}
          source={require('../../../assets/images/app_logo.png')}
          resizeMode="contain"
        />
      </LogoContainer>

      <HeaderTitle>On-site & Remote position available</HeaderTitle>
      <HeaderSubContent>
        Gain access to your dream jobs across the globe from the confides of
        your home.
      </HeaderSubContent>

      <VectorOneIllustrator
        source={require('../../../assets/images/walk_through_one.png')}
        resizeMode="contain"
      />

      <Button
        title="next"
        onPress={props.handleNextButton}
        buttonStyle={{
          width: RFValue(120),
          height: RFValue(40),
          borderRadius: RFValue(40),
          position: 'absolute',
          bottom: 20,
          right: 20
        }}
      />
    </Container>
  );
}
