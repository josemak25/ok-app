import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from './types';

export default function LaptopIcon(props: IconProps) {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27.808" height="18.539" viewBox="0 0 27.808 18.539">
  <defs>
    <linearGradient id="linear-gradient" x1="-0.282" y1="2.082" x2="-0.232" y2="2.047" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="-0.269" y1="2.033" x2="-0.244" y2="2.097" xlink:href="#linear-gradient"/>
    <linearGradient id="linear-gradient-3" x1="-0.834" y1="4.162" x2="-0.808" y2="4.15" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#fff" stop-opacity="0.071"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="linear-gradient-4" x1="-0.494" y1="2.49" x2="-0.471" y2="2.479" xlink:href="#linear-gradient-3"/>
    <linearGradient id="linear-gradient-5" x1="-0.089" y1="1.622" x2="-0.044" y2="1.591" xlink:href="#linear-gradient"/>
  </defs>
  <g id="laptop_1_" data-name="laptop (1)" transform="translate(0 -85.333)">
    <path id="Path_40" data-name="Path 40" d="M27.229,100.4H25.491V87.65a2.32,2.32,0,0,0-2.317-2.317H4.635A2.32,2.32,0,0,0,2.317,87.65V100.4H.579a.579.579,0,0,0-.579.579v.579a2.32,2.32,0,0,0,2.317,2.317H25.491a2.32,2.32,0,0,0,2.317-2.317v-.579A.579.579,0,0,0,27.229,100.4Z" transform="translate(0 0)" fill="#303c42"/>
    <g id="Group_32" data-name="Group 32" transform="translate(3.476 86.492)">
      <path id="SVGCleanerId_0" d="M64,107.826a1.16,1.16,0,0,1,1.159-1.159H83.7a1.16,1.16,0,0,1,1.159,1.159v12.746H64Z" transform="translate(-64 -106.667)" fill="#5c6671"/>
    </g>
    <g id="Group_33" data-name="Group 33" transform="translate(3.476 86.492)">
      <path id="SVGCleanerId_0_1_" d="M64,107.826a1.16,1.16,0,0,1,1.159-1.159H83.7a1.16,1.16,0,0,1,1.159,1.159v12.746H64Z" transform="translate(-64 -106.667)" fill="url(#linear-gradient)"/>
    </g>
    <g id="Group_34" data-name="Group 34" transform="translate(3.476 86.492)">
      <path id="SVGCleanerId_0_2_" d="M64,107.826a1.16,1.16,0,0,1,1.159-1.159H83.7a1.16,1.16,0,0,1,1.159,1.159v12.746H64Z" transform="translate(-64 -106.667)" fill="url(#linear-gradient-2)"/>
    </g>
    <path id="Path_41" data-name="Path 41" d="M45.666,385.159H22.493A1.16,1.16,0,0,1,21.334,384h9.609l.41.41a.579.579,0,0,0,.41.17H36.4a.579.579,0,0,0,.41-.17l.41-.41h9.609A1.16,1.16,0,0,1,45.666,385.159Z" transform="translate(-20.175 -282.445)" fill="#546e7a"/>
    <path id="Path_42" data-name="Path 42" d="M64,113.619V111.3l4.635-4.635h2.317Z" transform="translate(-60.524 -20.175)" fill="url(#linear-gradient-3)"/>
    <path id="Path_43" data-name="Path 43" d="M64,116.516l9.849-9.849h1.738L64,118.254Z" transform="translate(-60.524 -20.175)" fill="url(#linear-gradient-4)"/>
    <path id="Path_44" data-name="Path 44" d="M27.229,100.4H25.491V87.65a2.32,2.32,0,0,0-2.317-2.317H4.635A2.32,2.32,0,0,0,2.317,87.65V100.4H.579a.579.579,0,0,0-.579.579v.579a2.32,2.32,0,0,0,2.317,2.317H25.491a2.32,2.32,0,0,0,2.317-2.317v-.579A.579.579,0,0,0,27.229,100.4Z" transform="translate(0 0)" fill="url(#linear-gradient-5)"/>
  </g>
</svg>
`;

  return <SvgCss xml={xml} width="50%" height="50%" />;
}
