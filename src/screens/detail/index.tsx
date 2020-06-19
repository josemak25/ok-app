import React from 'react';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationInterface } from '../types';
import { useTheme } from '../../theme';
import jsCode from './jsCode';
import LoadingJobs from '../../components/loadingJobs';

import { Container } from './styles';

interface DetailScreenProps extends NavigationInterface {
  testID?: string;
}

export default function DetailScreen(props: DetailScreenProps) {
  const { colors } = useTheme();
  const { route } = props;

  //@ts-ignore
  const { jobLink } = route.params;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.DARK_BG_COLOR, paddingTop: 0 }}
    >
      <WebView
        source={{ uri: jobLink }}
        javaScriptEnabled={true}
        injectedJavaScript={jsCode}
        showsVerticalScrollIndicator={false}
        startInLoadingState={true}
        scalesPageToFit={true}
        renderLoading={() => (
          <Container>
            <LoadingJobs />
          </Container>
        )}
        style={{ flex: 1, backgroundColor: colors.DARK_BG_COLOR }}
        containerStyle={{ flex: 1, backgroundColor: colors.DARK_BG_COLOR }}
      />
    </SafeAreaView>
  );
}
