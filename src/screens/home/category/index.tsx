import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Card from '../../../components/card';
import boxShadow from '../../../utils/boxShadows';
import SummerIcon from '../../../../assets/icons/summer';
import LaptopIcon from '../../../../assets/icons/laptop';
import CustomerIcon from '../../../../assets/icons/customer';
import MarketingIcon from '../../../../assets/icons/marketing';
import DesignIcon from '../../../../assets/icons/design';
import NonTechIcon from '../../../../assets/icons/non_tech';

import { CategoryName, CategoryLogo } from './styles';

interface CategoryProps {
  testID?: string;
  name: string;
  query: string;
  handleCategory(query: string): void;
}

export default function Category(props: CategoryProps) {
  const { name, handleCategory, query } = props;

  return (
    <Card
      onPress={() => handleCategory(query)}
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
        {name === 'non tech' && <NonTechIcon />}
      </CategoryLogo>

      <CategoryName>{name}</CategoryName>
    </Card>
  );
}
