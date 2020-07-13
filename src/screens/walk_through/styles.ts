import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { DEVICE_FULL_WIDTH } from '../../utils/device';

export const Container = styled.View`
  flex: 1;
  padding: 20px 20px;
  overflow: hidden;
`;

export const LogoContainer = styled.View`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFValue(25)}px;
  background-color: ${({ theme }) => theme.colors.ACTION_BG_COLOR};
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.Text`
  width: 90%;
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE + 5)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
`;

export const HeaderSubContent = styled.Text`
  width: 80%;
  font-size: ${({ theme }) => RFValue(theme.fonts.MEDIUM_SIZE + 1)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_MEDIUM};
  color: ${({ theme }) => theme.colors.BOX_SHADOW_COLOR};
  padding-top: 15px;
`;

export const VectorOneIllustrator = styled.Image`
  width: ${RFValue(500)}px;
  height: ${RFValue(500)}px;
  left: ${RFValue(-120)}px;
  bottom: ${RFValue(DEVICE_FULL_WIDTH <= 375 ? 70 : 40)}px;
`;

export const VectorTwoIllustrator = styled.Image`
  width: ${RFValue(430)}px;
  height: ${RFValue(DEVICE_FULL_WIDTH <= 375 ? 380 : 400)}px;
  left: ${RFValue(-130)}px;
  top: ${RFValue(30)}px;
`;
