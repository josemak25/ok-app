import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const CategoryLogo = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  border-radius: ${RFValue(60 / 2)}px;
`;

export const CategoryName = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.SMALL_SIZE)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_MEDIUM};
  color: ${({ theme }) => theme.colors.BOX_SHADOW_COLOR};
  padding-top: 5px;
  text-transform: capitalize;
  text-align: center;
`;
