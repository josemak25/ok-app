import React from 'react';
import { Container } from './styles';
import { WebView } from 'react-native-webview';
import { NavigationInterface } from '../types';
import { useTheme } from '../../theme';

interface DetailScreenProps extends NavigationInterface {
  testID?: string;
}

export default function DetailScreen(props: DetailScreenProps) {
  const { colors } = useTheme();
  const { navigation, route } = props;

  //@ts-ignore
  const { jobLink } = route.params;

  const jsCode = `
  document.querySelector('.page').style.backgroundColor = '#F8FBFB';

  document.querySelector('.notice').style.display = 'none';
  document.querySelector('.nav').style.display = 'none';
  document.querySelector('.switcher-container').style.display = 'none';
  document.querySelector('.notice-post-job').style.display = 'none';
  document.querySelector('.feedback-popup').style.display = 'none';
  document.querySelector('.open-startup').style.display = 'none';
  const tableBody = document.querySelector('tbody').children
  tableBody[0].style.display = 'none';
  tableBody[1].style.display = 'none';

  const instructionsBody = document.querySelector('.instructions').children
  instructionsBody[0].style.display = 'none';

  const expandContents =  document.querySelector('.expandContents')
  const expandContentsChildren = expandContents.children

  expandContents.style.display = 'none';

  const newExpandContents = document.createElement("div");
  newExpandContents.style.display = 'block';
  newExpandContents.style.width = '100%';
  newExpandContents.style.height = '300px';
  newExpandContents.style.backgroundColor = '#ff4742';


  // newExpandContents.appendChild(expandContentsChildren);
  tableBody.appendChild(newExpandContents);
  `;

  return (
    <Container>
      <WebView
        source={{ uri: jobLink }}
        containerStyle={{ flex: 1, backgroundColor: colors.DARK_BG_COLOR }}
        originWhitelist={['*']}
        javaScriptEnabled={true}
        injectedJavaScript={jsCode}
      />
    </Container>
  );
}
