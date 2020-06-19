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
  VectorTwoIllustrator
} from './styles';

interface WalkThroughTwoProps {
  handleDoneButton(): void;
}

export default function WalkThroughTwo(props: WalkThroughTwoProps) {
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

      <HeaderTitle>Nomads stop point</HeaderTitle>
      <HeaderSubContent>Your job search Ends here!.</HeaderSubContent>

      <VectorTwoIllustrator
        source={require('../../../assets/images/walk_through_two.png')}
        resizeMode="contain"
      />

      <Button
        title="Get started"
        onPress={props.handleDoneButton}
        buttonStyle={{
          width: RFValue(120),
          height: RFValue(40),
          borderRadius: RFValue(40),
          position: 'absolute',
          bottom: 20,
          right: 20
        }}
        textStyle={{ textTransform: 'none' }}
      />
    </Container>
  );
}
