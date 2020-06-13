import styled from 'styled-components/native';
import hexToRGB from '../../utils/hexToRGB';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  border-radius: 5px;
  padding: ${RFValue(15)}px;
  padding-right: ${RFValue(0)}px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => hexToRGB(theme.colors.BLACK_FONT_COLOR, 0.5)};
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_MEDIUM};
  padding-left: 10px;
`;
