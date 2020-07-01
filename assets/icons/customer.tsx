import * as React from 'react';
import { SvgCss } from 'react-native-svg';
import { IconProps } from './types';

export default function CustomerIcon(props: IconProps) {
  const xml = `
  <svg xmlns="http://www.w3.org/2000/svg" width="26.202" height="25.717" viewBox="0 0 26.202 25.717">
  <g id="headphones" transform="translate(0 -4.746)">
    <g id="Group_37" data-name="Group 37" transform="translate(2.282 4.746)">
      <g id="Group_35" data-name="Group 35" transform="translate(0 4.098)">
        <path id="Path_45" data-name="Path 45" d="M379.819,98.821h3.574V91.541a10.766,10.766,0,0,0-2.347-6.721l-1.921.576L378.862,87a7.715,7.715,0,0,1,1.469,4.537v2.382Z" transform="translate(-361.756 -84.82)" fill="#dc4b4b"/>
        <path id="Path_46" data-name="Path 46" d="M44.6,91.541v7.281h3.574l-.512-4.9V91.541A7.715,7.715,0,0,1,49.129,87L48.32,85.4l-1.375-.576A10.766,10.766,0,0,0,44.6,91.541Z" transform="translate(-44.598 -84.82)" fill="#0ed678"/>
      </g>
      <g id="Group_36" data-name="Group 36" transform="translate(2.347 0)">
        <path id="Path_47" data-name="Path 47" d="M245.879,4.746l-.546,1.945.546,1.117a7.751,7.751,0,0,1,6.288,3.22l2.184-2.184A10.8,10.8,0,0,0,245.879,4.746Z" transform="translate(-237.407 -4.746)" fill="#fdae02"/>
        <path id="Path_48" data-name="Path 48" d="M98.934,4.746a10.8,10.8,0,0,0-8.472,4.1l2.184,2.184a7.752,7.752,0,0,1,6.288-3.22Z" transform="translate(-90.462 -4.746)" fill="#fdcb02"/>
      </g>
    </g>
    <g id="Group_38" data-name="Group 38" transform="translate(0 17.946)">
      <path id="Path_49" data-name="Path 49" d="M4.577,295.536a4.577,4.577,0,0,0,0,9.154H6.551v-9.154Z" transform="translate(0 -293.855)" fill="#28485e"/>
      <path id="Path_50" data-name="Path 50" d="M104.977,262.685h-.56V275.2h.56a3.584,3.584,0,0,0,3.58-3.58v-5.357A3.584,3.584,0,0,0,104.977,262.685Z" transform="translate(-99.073 -262.685)" fill="#ebe1dc"/>
    </g>
    <g id="Group_39" data-name="Group 39" transform="translate(16.719 17.946)">
      <path id="Path_51" data-name="Path 51" d="M385.974,295.536a4.577,4.577,0,1,1,0,9.154H384v-9.154Z" transform="translate(-381.067 -293.855)" fill="#1b303e"/>
      <path id="Path_52" data-name="Path 52" d="M330.271,262.685h.56V275.2h-.56a3.584,3.584,0,0,1-3.58-3.58v-5.357A3.584,3.584,0,0,1,330.271,262.685Z" transform="translate(-326.691 -262.685)" fill="#dcd2cd"/>
    </g>
  </g>
</svg>
`;

  return <SvgCss xml={xml} width="50%" height="50%" />;
}
