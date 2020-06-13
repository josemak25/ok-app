import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import { useTheme } from '../../theme';
import InputField from '../../components/input';
import boxShadow from '../../utils/boxShadows';
import Category from './category';
import Job from './job';

import { Container, WelcomeText, SearchJob } from './styles';

interface HomeScreenProps extends NavigationInterface {
  testID?: string;
  categories: { name: string }[];
}

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useTheme();

  const [state, setState] = useState({ searchWord: '' });

  const handleSubmit = () => setState({ ...state, searchWord: '' });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_BG_COLOR
      }}
    >
      <Container>
        <WelcomeText>Find your Job</WelcomeText>
        <InputField
          placeholder="Search..."
          onChangeText={(searchWord) => setState({ ...state, searchWord })}
          onSubmitEditing={handleSubmit}
          defaultValue={state.searchWord}
          returnKeyType="search"
          placeholderTextColor={colors.BOX_SHADOW_COLOR}
          style={[
            boxShadow({
              elevation: 0.5,
              width: 0,
              height: 1,
              shadowOpacity: 0.25,
              shadowRadius: 2
            }),
            { marginTop: RFValue(50) }
          ]}
          inputStyle={{ paddingRight: 20 }}
        >
          <AntDesign
            name="search1"
            size={RFValue(20)}
            color={colors.BOX_SHADOW_COLOR}
          />
        </InputField>

        <SearchJob>Search by category</SearchJob>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: RFValue(100),
            marginTop: 20
          }}
        >
          {props.categories.map((category) => (
            <Category {...category} key={category.name} />
          ))}
        </ScrollView>
      </Container>
    </SafeAreaView>
  );
}

HomeScreen.defaultProps = {
  categories: [
    { name: 'remote jobs' },
    { name: 'software development' },
    { name: 'customer support' },
    { name: 'marketing' },
    { name: 'design' }
  ]
};
