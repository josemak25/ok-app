import React from 'react';
import Card from '../../../components/card';
import { RFValue } from 'react-native-responsive-fontsize';
import boxShadow from '../../../utils/boxShadows';
import SummerIcon from '../../../../assets/icons/summer';
import LaptopIcon from '../../../../assets/icons/laptop';
import CustomerIcon from '../../../../assets/icons/customer';
import MarketingIcon from '../../../../assets/icons/marketing';
import DesignIcon from '../../../../assets/icons/design';

import { CategoryName, CategoryLogo } from './styles';

interface CategoryProps {
  testID?: string;
  name: string;
}

export default function Category(props: CategoryProps) {
  const { name } = props;

  return (
    <Card
      style={{
        width: RFValue(70),
        height: '100%',
        marginRight: 2,
        backgroundColor: 'transparent'
      }}
    >
      <CategoryLogo
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
        {name === 'remote jobs' && <SummerIcon />}
        {name === 'software development' && <LaptopIcon />}
        {name === 'customer support' && <CustomerIcon />}
        {name === 'marketing' && <MarketingIcon />}
        {name === 'design' && <DesignIcon />}
      </CategoryLogo>

      <CategoryName>{name}</CategoryName>
    </Card>
  );
}
