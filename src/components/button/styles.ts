import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.ACTION_BG_COLOR};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.SMALL_SIZE + 2)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_BOLD};
  color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  text-transform: capitalize;
`;
