import React, { useState, useEffect } from 'react';
import { RefreshControl, FlatList, StatusBar } from 'react-native';
//@ts-ignore
import { OptimizedFlatList } from 'react-native-optimized-flatlist';
import { SafeAreaView } from 'react-native-safe-area-context';
import { JOB_ACTION_TYPES } from '../../store/job/types';
import LoadingJobs from '../../components/loadingJobs';
import jobActions from '../../store/job/actions';
import renderEmptyList from './renderEmptyList';
import { NavigationInterface } from '../types';
import { useStore } from '../../store';
import { useTheme } from '../../theme';
import Header from './header';
import Job from './job';

interface HomeScreenProps extends NavigationInterface {
  testID?: string;
}

export default function HomeScreen(props: HomeScreenProps) {
  const { colors } = useTheme();

  const { navigation } = props;

  const {
    dispatch,
    store: { jobState }
  } = useStore();

  const [state, setState] = useState({
    searchWord: '',
    refreshing: false,
    callOnScrollEnd: false,
    page: 0
  });

  useEffect(() => {
    if (!jobState.jobs.length) {
      jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS);
    }
  }, []);

  const onRefresh = async () => {
    setState({ ...state, refreshing: true });
    jobState.jobs.length = 0;
    await jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS);
    setState({ ...state, refreshing: false });
  };

  const handleSubmit = () => setState({ ...state, searchWord: '' });

  const _handleCategory = (query: string) => {
    jobState.jobs.length = 0;

    if (!query) {
      return jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS);
    }

    jobActions(dispatch, JOB_ACTION_TYPES.FETCH_ALL_JOBS, `?tags=${query}`);
  };

  const handleEndReach = async () => {
    if (!state.callOnScrollEnd) return;

    const { page } = state;
    const skip = page + 1;
    await jobActions(dispatch, JOB_ACTION_TYPES.PAGINATE_JOBS, skip);
    setState({ ...state, page: skip, callOnScrollEnd: false });
  };

  const renderItem = ({ item }: any) => (
    <Job {...item} navigation={navigation} />
  );

  const renderFooter = () => {
    return state.callOnScrollEnd ? <LoadingJobs size={50} /> : null;
  };

  const renderHeader = () => (
    <Header
      searchWord={state.searchWord}
      handleSubmit={handleSubmit}
      onChangeText={(searchWord) => setState({ ...state, searchWord })}
      handleCategory={_handleCategory}
    />
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.DARK_BG_COLOR
      }}
    >
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.DARK_BG_COLOR}
      />
      <FlatList
        style={{ flex: 1 }}
        data={jobState.jobs}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyList}
        ListFooterComponent={renderFooter}
        ListFooterComponentStyle={{ padding: 10 }}
        windowSize={25}
        scrollEventThrottle={16}
        initialNumToRender={10}
        maxToRenderPerBatch={3}
        removeClippedSubviews={true}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.01}
        onMomentumScrollEnd={handleEndReach}
        onEndReached={() => setState({ ...state, callOnScrollEnd: true })}
        refreshControl={
          <RefreshControl
            refreshing={state.refreshing}
            onRefresh={onRefresh}
            tintColor={colors.ACTION_BG_COLOR}
            colors={[colors.ACTION_BG_COLOR]}
          />
        }
      />
    </SafeAreaView>
  );
}
