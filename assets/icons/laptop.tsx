import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from './types';

export default function LaptopIcon(props: IconProps) {
  const xml = `
  <?xml version="1.0" encoding="iso-8859-1"?>
  <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     viewBox="0 0 468.293 468.293" style="enable-background:new 0 0 468.293 468.293;" xml:space="preserve">
  <path style="fill:#64798A;" d="M30.966,364.373V92.099c0-10.345,8.386-18.732,18.732-18.732h368.897
    c10.345,0,18.732,8.386,18.732,18.732v272.274H30.966z"/>
  <path style="fill:#44C4A1;" d="M401.311,90.648H66.981c-10.345,0-18.732,8.386-18.732,18.732v224.566h371.793V109.38
    C420.043,99.035,411.657,90.648,401.311,90.648z"/>
  <path style="fill:#D5D6DB;" d="M277.371,351.228v13.671h-86.45v-13.671H0v20.654c0,12.727,10.317,23.043,23.043,23.043h422.206
    c12.727,0,23.043-10.317,23.043-23.043v-20.654H277.371z"/>
  </svg>
`;

  return <SvgCss xml={xml} width="50%" height="50%" />;
}
