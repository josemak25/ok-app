import React from 'react';
import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import InputField from '../../components/input';
import boxShadow from '../../utils/boxShadows';
import Category from './category';
import { useTheme } from '../../theme';

import { Container, WelcomeText, SearchJob } from './styles';

interface HeaderProps {
  testID?: string;
  searchWord: string;
  categories: { name: string; query: string }[];
  onChangeText(value: string): void;
  handleSubmit(): void;
  handleCategory(value: string): Promise<void> | undefined;
}

export default function Header(props: HeaderProps) {
  const { colors } = useTheme();

  const {
    searchWord,
    categories,
    onChangeText,
    handleSubmit,
    handleCategory
  } = props;

  return (
    <Container>
      <Container style={{ paddingLeft: 20, paddingRight: 20 }}>
        <WelcomeText>Find your Job</WelcomeText>
        <InputField
          placeholder="Search..."
          onChangeText={onChangeText}
          onSubmitEditing={handleSubmit}
          defaultValue={searchWord}
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
            { marginTop: RFValue(30) }
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
      </Container>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        style={{ marginTop: 20 }}
        contentContainerStyle={{ height: RFValue(100), paddingLeft: 10 }}
      >
        {categories.map((category) => (
          <Category
            {...category}
            key={category.name}
            handleCategory={handleCategory}
          />
        ))}
      </ScrollView>
    </Container>
  );
}

Header.defaultProps = {
  categories: [
    { name: 'remote jobs' },
    { name: 'software development', query: 'dev' },
    { name: 'customer support', query: 'customer+support' },
    { name: 'marketing', query: 'marketing' },
    { name: 'design', query: 'design' },
    { name: 'non tech', query: 'non+tech' }
  ]
};
