import React, { useState, useEffect, Fragment } from 'react';
import { ScrollView, RefreshControl, SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { AntDesign } from '@expo/vector-icons';
import { NavigationInterface } from '../types';
import { useTheme } from '../../theme';
import InputField from '../../components/input';
import boxShadow from '../../utils/boxShadows';
import Category from './category';
import Job from './job';
import { JOB_ACTION_TYPES } from '../../store/job/types';
import { JobInterface } from '../../store/job/types';
import LoadingJobs from '../../components/loadingJobs';
import jobActions from '../../store/job/actions';
import { useStore } from '../../store';
import RenderEmptyList from './renderEmptyList';

import { Container, WelcomeText, SearchJob, Section } from './styles';

interface HomeScreenProps extends NavigationInterface {
  testID?: string;
  categories: { name: string; query: string }[];
}

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useTheme();

  const { categories, navigation } = props;

  const {
    dispatch,
    store: { jobState }
  } = useStore();

  const [state, setState] = useState({
    searchWord: '',
    refreshing: false
  });

  useEffect(() => {
    if (!jobState.jobs.length) {
      jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS);
    }
  }, []);

  const _onRefresh = async () => {
    setState({ ...state, refreshing: true });
    await jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS);
    setState({ ...state, refreshing: false });
  };

  const handleSubmit = () => setState({ ...state, searchWord: '' });

  const _handleCategory = async (query: string) => {
    if (!query) {
      return await jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS);
    }

    await jobActions(
      dispatch,
      JOB_ACTION_TYPES.FETCH_ALL_JOBS,
      `?tags=${query}`
    );
  };

  const _rowRenderer = ({ item }: any) => (
    <Job {...item} navigation={navigation} />
  );

  const _renderFooter = () => <LoadingJobs size={30} />;

  const _renderHeader = () => (
    <Fragment>
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
        style={{ marginTop: 20 }}
        contentContainerStyle={{ height: RFValue(100), paddingLeft: 10 }}
      >
        {categories.map((category) => (
          <Category
            {...category}
            key={category.name}
            handleCategory={_handleCategory}
          />
        ))}
      </ScrollView>
    </Fragment>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_BG_COLOR
      }}
    >
      {!jobState.isLoading ? (
        <SectionList
          style={{ flex: 1 }}
          sections={jobState.jobs}
          renderItem={_rowRenderer}
          ListHeaderComponent={_renderHeader}
          ListFooterComponent={_renderFooter}
          //@ts-ignore
          ListFooterComponentStyle={{ paddingTop: 5 }}
          renderSectionHeader={({ section: { title } }) => {
            return !jobState.isLoading ? <Section>{title}</Section> : null;
          }}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
          windowSize={25}
          removeClippedSubviews={true}
          maxToRenderPerBatch={5}
          onEndReachedThreshold={0}
          initialNumToRender={10}
          keyExtractor={(game: JobInterface) => `${game.id}`}
          refreshControl={
            <RefreshControl
              refreshing={state.refreshing}
              onRefresh={_onRefresh}
              tintColor={colors.ACTION_BG_COLOR}
              colors={[colors.ACTION_BG_COLOR]}
            />
          }
        />
      ) : (
        <RenderEmptyList
          isLoading={jobState.isLoading}
          renderHeader={_renderHeader}
        />
      )}
    </SafeAreaView>
  );
}

HomeScreen.defaultProps = {
  categories: [
    { name: 'remote jobs' },
    { name: 'software development', query: 'dev' },
    { name: 'customer support', query: 'customer+support' },
    { name: 'marketing', query: 'marketing' },
    { name: 'design', query: 'design' },
    { name: 'non tech', query: 'non+tech' }
  ]
};
