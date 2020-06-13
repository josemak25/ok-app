import React from 'react';
import { Image } from 'react-native';
import { NavigationInterface } from '../../types';
import Card from '../../../components/card';
import { JobInterface } from '../../../store/job/types';
import hexToRGB from '../../../utils/hexToRGB';
import { RFValue } from 'react-native-responsive-fontsize';
import boxShadow from '../../../utils/boxShadows';

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

export default function Job(props: JobProps) {
  const { navigation } = props;

  return (
    <Card
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 20
      }}
    >
      <LeftContainer>
        <CompanyName>Wallethub</CompanyName>
        <JobPosition>Senior Manual Quality Assurance Engineer</JobPosition>

        <JobTagsContainer>
          <JobTag style={{ backgroundColor: hexToRGB('#CF36E3', 0.3) }}>
            <JobTagName style={{ color: '#CF36E3' }}>vue.js</JobTagName>
          </JobTag>
          <JobTag style={{ backgroundColor: hexToRGB('#E3CF36', 0.3) }}>
            <JobTagName style={{ color: '#E3CF36' }}>java</JobTagName>
          </JobTag>
          <JobTag style={{ backgroundColor: hexToRGB('#3636E3', 0.3) }}>
            <JobTagName style={{ color: '#3636E3' }}>react</JobTagName>
          </JobTag>
          <JobTag style={{ backgroundColor: hexToRGB('#59C36A', 0.3) }}>
            <JobTagName style={{ color: '#59C36A' }}>react native</JobTagName>
          </JobTag>
        </JobTagsContainer>
      </LeftContainer>

      <RightContainer>
        <Container>
          <JobPostedTime>5h</JobPostedTime>
          <CompanyLogo
            style={[
              boxShadow({
                elevation: 0.5,
                width: 0,
                height: 1,
                shadowOpacity: 0.25,
                shadowRadius: 2
              })
            ]}
          >
            <Image
              style={{
                width: RFValue(50),
                height: RFValue(50),
                borderRadius: RFValue(50 / 2)
              }}
              source={{ uri: 'https://bit.ly/2XWrqMz', cache: 'force-cache' }}
            />
          </CompanyLogo>
          <Verified>
            <VerifiedText>Verified</VerifiedText>
          </Verified>
        </Container>
      </RightContainer>
    </Card>
  );
}
