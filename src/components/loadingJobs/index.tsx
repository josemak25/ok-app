import React from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { useTheme } from '../../theme';

import { Container } from './styles';

type LoadingJobsProps = {
  size?: number | 'large' | 'small';
};

export default function LoadingJobs({ size }: LoadingJobsProps) {
  const { colors } = useTheme();

  const loaderSize = size ? size : Platform.OS === 'ios' ? 'large' : 45;

  return (
    <Container>
      <ActivityIndicator size={loaderSize} color={colors.ACTION_BG_COLOR} />
    </Container>
  );
}
