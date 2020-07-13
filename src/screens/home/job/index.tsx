import React, { Fragment } from 'react';
import FastImage from 'react-native-fast-image';
import { NavigationInterface } from '../../types';
import { RFValue } from 'react-native-responsive-fontsize';
import Card from '../../../components/card';
import hexToRGB from '../../../utils/hexToRGB';
import { JobInterface } from '../../../store/job/types';
import boxShadow from '../../../utils/boxShadows';
import { useTheme } from '../../../theme';
import getCompanyLogo from '../../../utils/getCompanyLogo';

import { Section } from '../styles';
import {
  Container,
  LeftContainer,
  RightContainer,
  CompanyName,
  JobPosition,
  JobTagsContainer,
  JobTag,
  JobTagName,
  JobPostedTime,
  Verified,
  VerifiedText,
  CompanyLogo
} from './styles';

interface JobProps extends NavigationInterface, JobInterface {
  testID?: string;
}

const Job = (props: JobProps) => {
  const { colors, fonts } = useTheme();

  const {
    navigation,
    company,
    company_logo,
    date,
    position,
    verified,
    tags,
    url,
    section
  } = props;

  const handleNavigation = () => {
    navigation.navigate('DetailScreen', { jobLink: url });
  };

  if (!company && !company_logo) return null;

  return (
    <Fragment>
      {section ? <Section>{section}</Section> : null}

      <Card
        onPress={handleNavigation}
        style={{
          width: '100%',
          minHeight: RFValue(120),
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: 20,
          marginTop: 4,
          marginBottom: 4
        }}
      >
        <LeftContainer>
          <CompanyName>{company}</CompanyName>
          <JobPosition>{position}</JobPosition>

          {tags ? (
            <JobTagsContainer>
              {tags
                .sort((a, b) => a.name.length - b.name.length)
                .slice(0, 4)
                .map(({ name, color }, index) => (
                  <JobTag
                    key={`${name + index.toString()}`}
                    style={{ backgroundColor: hexToRGB(color, 0.4) }}
                  >
                    <JobTagName style={{ color }}>{name}</JobTagName>
                  </JobTag>
                ))}
            </JobTagsContainer>
          ) : null}
        </LeftContainer>

        <RightContainer>
          <Container>
            <JobPostedTime
              style={{ marginBottom: !tags.length ? RFValue(10) : 0 }}
            >
              {date}
            </JobPostedTime>
            <CompanyLogo
              style={[
                boxShadow({
                  elevation: 0.5,
                  width: 0,
                  height: 1,
                  shadowOpacity: 0.25,
                  shadowRadius: 2
                }),
                {
                  width: tags.length <= 3 ? RFValue(50) : RFValue(60),
                  height: tags.length <= 3 ? RFValue(50) : RFValue(60),
                  borderRadius:
                    tags.length <= 3 ? RFValue(50 / 2) : RFValue(60 / 2)
                }
              ]}
            >
              {company_logo ? (
                <FastImage
                  style={{
                    width: tags.length <= 3 ? RFValue(40) : RFValue(50),
                    height: tags.length <= 3 ? RFValue(40) : RFValue(50),
                    borderRadius:
                      tags.length <= 3 ? RFValue(40 / 2) : RFValue(50 / 2)
                  }}
                  source={{
                    uri: company_logo,
                    priority: FastImage.priority.high
                  }}
                  resizeMode={FastImage.resizeMode.contain}
                />
              ) : (
                <CompanyName
                  style={{
                    fontSize:
                      tags.length <= 3
                        ? RFValue(fonts.LARGE_SIZE * 1.8)
                        : RFValue(fonts.LARGE_SIZE * 2.1),
                    color: colors.BOX_SHADOW_COLOR
                  }}
                >
                  {getCompanyLogo(company)}
                </CompanyName>
              )}
            </CompanyLogo>

            {verified ? (
              <Verified>
                <VerifiedText>Verified</VerifiedText>
              </Verified>
            ) : (
              <Verified
                style={{ backgroundColor: colors.WHITE_BG_COLOR }}
              ></Verified>
            )}
          </Container>
        </RightContainer>
      </Card>
    </Fragment>
  );
};

export default React.memo(Job, () => false);
