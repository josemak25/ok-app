import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const LeftContainer = styled.View`
  width: 80%;
`;

export const RightContainer = styled.View`
  width: 20%;
  height: 100%;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

export const JobTagsWrapper = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const JobTagContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin: 5px 10px 5px 0px;
`;

export const JobTagName = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.MEDIUM_SIZE - 4)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_MEDIUM};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  text-transform: uppercase;
`;

export const JobPostedTime = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.MEDIUM_SIZE + 1)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_MEDIUM};
  color: ${({ theme }) => theme.colors.BOX_SHADOW_COLOR};
`;

export const CompanyLogo = styled.View`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.WHITE_BG_COLOR};
  border-radius: ${RFValue(60 / 2)}px;
`;

export const Verified = styled.View`
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #36e67f;
  border-radius: 5px;
`;

export const VerifiedText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.SMALL_SIZE)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_BOLD};
  color: ${({ theme }) => theme.colors.WHITE_FONT_COLOR};
  text-transform: uppercase;
`;

export const CompanyName = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE + 3)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  text-transform: capitalize;
`;

export const JobPosition = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.MEDIUM_SIZE + 3)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_MEDIUM};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
  padding-top: 5px;
`;

export const Category = styled.View`
  padding: 5px 20px;
  background-color: #36e67f;
`;

export const CategoryText = styled.Text`
  font-size: ${({ theme }) => RFValue(theme.fonts.LARGE_SIZE + 9)}px;
  font-family: ${({ theme }) => theme.fonts.CORE_SANS_BOLD};
  color: ${({ theme }) => theme.colors.BLACK_FONT_COLOR};
`;
