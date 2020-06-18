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
import _renderEmptyList from './renderEmptyList';

import { Container, WelcomeText, SearchJob, Section } from './styles';

interface HomeScreenProps extends NavigationInterface {
  testID?: string;
  categories: { name: string }[];
}

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useTheme();

  const {
    dispatch,
    store: { jobState }
  } = useStore();

  const [state, setState] = useState<{
    searchWord: string;
    refreshing: boolean;
    loading: boolean;
    jobsListing: JobInterface[];
    page: number;
  }>({
    searchWord: '',
    refreshing: false,
    loading: false,
    jobsListing: [],
    page: 1
  });

  useEffect(() => {
    const [todayJobs] = jobState.jobs;

    if (!todayJobs.data.length) {
      jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS);
    }
    // console.log(todayJobs.data.length)
    // setState({ ...state, jobsListing: jobState.jobs.slice(0, 10) });
  }, []);

  const _onRefresh = async () => {
    setState({ ...state, refreshing: true });
    await jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS);
    // setState({
    //   ...state,
    //   refreshing: false,
    //   jobsListing: jobState.jobs.slice(0, 10)
    // });
  };

  const handleSubmit = () => setState({ ...state, searchWord: '' });

  const _rowRenderer = ({ item }: any) => <Job {...item} {...props} />;

  const _handleEndReached = () => {
    const nextPage = state.page + 1;

    const paginatedJobsListing = jobState.jobs.slice(
      nextPage * 10,
      nextPage * 10 + 10
    );

    // setState({
    //   ...state,
    //   page: nextPage,
    //   jobsListing: state.jobsListing.concat(paginatedJobsListing)
    // });
  };

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
        {props.categories.map((category) => (
          <Category {...category} key={category.name} />
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
      <SectionList
        style={{ flex: 1 }}
        sections={jobState.jobs}
        renderItem={_rowRenderer}
        ListHeaderComponent={_renderHeader}
        ListFooterComponent={_renderFooter}
        ListFooterComponentStyle={{ paddingTop: 5 }}
        renderSectionHeader={({ section: { title } }) => {
          return !jobState.isLoading ? (
          <Section>{title}</Section>
        ) : null}}
        //@ts-ignore
        ListEmptyComponent={_renderEmptyList}
        showsVerticalScrollIndicator={false}
        keyExtractor={(game: JobInterface) => `${game.id}`}
        onEndReachedThreshold={0}
        initialNumToRender={5}
        onEndReached={_handleEndReached}
        stickySectionHeadersEnabled={false}
        refreshControl={
          <RefreshControl
            refreshing={state.refreshing}
            onRefresh={_onRefresh}
            tintColor={colors.ACTION_BG_COLOR}
            colors={[colors.ACTION_BG_COLOR]}
          />
        }
      />
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
