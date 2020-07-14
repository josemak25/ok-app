import React from 'react';
import hexToRGB from '../../../utils/hexToRGB';

import { JobTagContainer, JobTagName } from './styles';

interface TagsProps {
  testID?: string;
  name: string;
  color: string;
}

const JobTag = (props: TagsProps) => {
  const { name, color } = props;

  return (
    <JobTagContainer style={{ backgroundColor: hexToRGB(color, 0.4) }}>
      <JobTagName style={{ color }}>{name}</JobTagName>
    </JobTagContainer>
  );
};

export default React.memo(JobTag, () => false);
