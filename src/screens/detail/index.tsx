import React from 'react';
import { StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoadingJobs from '../../components/loadingJobs';
import { NavigationInterface } from '../types';
import { useTheme } from '../../theme';
import jsCode from './jsCode';

import { Container } from './styles';

interface DetailScreenProps extends NavigationInterface {
  testID?: string;
}

export default function DetailScreen(props: DetailScreenProps) {
  const { colors } = useTheme();
  const { route } = props;

  //@ts-ignore
  const { jobLink } = route.params;

  const renderLoading = () => (
    <Container>
      <LoadingJobs size={40} />
    </Container>
  );

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.DARK_BG_COLOR, paddingTop: 0 }}
    >
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor={colors.WHITE_BG_COLOR}
      />
      <WebView
        source={{ uri: jobLink }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        injectedJavaScript={jsCode}
        showsVerticalScrollIndicator={false}
        startInLoadingState={true}
        scalesPageToFit={true}
        renderLoading={renderLoading}
        style={{ flex: 1, backgroundColor: colors.DARK_BG_COLOR }}
        containerStyle={{ flex: 1, backgroundColor: colors.DARK_BG_COLOR }}
      />
    </SafeAreaView>
  );
}
