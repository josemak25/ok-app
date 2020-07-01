import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from './types';

export default function NonTechIcon(props: IconProps) {
  const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="29.923" height="29.923" viewBox="0 0 29.923 29.923">
  <g id="plug" transform="translate(0 0)">
    <path id="Path_64" data-name="Path 64" d="M5.622,411.672a.877.877,0,0,0-1.24,0L.257,415.8a.877.877,0,0,0,1.24,1.24l4.125-4.125A.876.876,0,0,0,5.622,411.672Z" transform="translate(0 -387.37)" fill="#75efff"/>
    <path id="Path_65" data-name="Path 65" d="M411.669,5.622a.876.876,0,0,0,1.24,0L417.034,1.5a.877.877,0,0,0-1.24-1.24l-4.125,4.125A.876.876,0,0,0,411.669,5.622Z" transform="translate(-387.367)" fill="#00ceee"/>
    <path id="Path_66" data-name="Path 66" d="M154.974,226.673a.877.877,0,0,1-.62-.257l-3.984-3.984a.877.877,0,0,1,0-1.24l2.656-2.656a.877.877,0,0,1,1.24,1.24l-2.036,2.036,2.744,2.744,2.036-2.036a.877.877,0,0,1,1.24,1.24l-2.656,2.656A.877.877,0,0,1,154.974,226.673Z" transform="translate(-141.34 -205.522)" fill="#ffe477"/>
    <path id="Path_67" data-name="Path 67" d="M194.476,286.7a.877.877,0,0,0-1.24,0l-2.036,2.036-1.372-1.372-1.24,1.24,1.992,1.992a.877.877,0,0,0,1.24,0l2.656-2.656A.876.876,0,0,0,194.476,286.7Z" transform="translate(-177.567 -269.704)" fill="#ffb655"/>
    <g id="Group_40" data-name="Group 40" transform="translate(2.753 2.751)">
      <path id="Path_68" data-name="Path 68" d="M60.594,237.865l-4.722-4.722-2.582-2.582h0l-.663-.662a.877.877,0,0,0-1.24,1.24l.044.044-2.7,2.7a5.572,5.572,0,0,0,3.94,9.511s0,0,0,0a5.535,5.535,0,0,0,3.94-1.632l2.7-2.7.044.044a.877.877,0,0,0,1.24-1.24Z" transform="translate(-47.101 -218.97)" fill="#00479b"/>
      <path id="Path_69" data-name="Path 69" d="M239.1,59.314l-.044-.044,2.7-2.7a5.572,5.572,0,1,0-7.879-7.88l-2.7,2.7-.044-.044a.877.877,0,0,0-1.24,1.24l7.968,7.968a.877.877,0,0,0,1.24-1.24Z" transform="translate(-218.97 -47.059)" fill="#00479b"/>
    </g>
    <g id="Group_41" data-name="Group 41" transform="translate(4.382 4.383)">
      <path id="Path_70" data-name="Path 70" d="M86.845,306.182,82.862,302.2l-7.88,7.88a5.535,5.535,0,0,0,3.94,1.632s0,0,0,0a5.535,5.535,0,0,0,3.94-1.632l2.7-2.7.044.044a.877.877,0,0,0,1.24-1.24Z" transform="translate(-74.982 -288.918)" fill="#003068"/>
      <path id="Path_71" data-name="Path 71" d="M306.8,87.1a.877.877,0,0,0,.62-1.5l-.044-.044,2.7-2.7a5.578,5.578,0,0,0,0-7.88l-7.88,7.88,3.984,3.984A.874.874,0,0,0,306.8,87.1Z" transform="translate(-288.92 -74.98)" fill="#003068"/>
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} width="50%" height="50%" />;
}
