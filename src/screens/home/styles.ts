import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const WelcomeText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE * 2)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  padding-top: 10px;
`;

export const SearchJob = styled.TextInput`
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  margin-top: 20px;
`;

export const Section = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE + 9)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  padding: 20px;
`;
