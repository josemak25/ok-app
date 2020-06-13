import * as React from 'react';
import Svg, { Defs, LinearGradient, Stop, G, Path } from 'react-native-svg';
import { IconProps } from './types';

export default function LaptopIcon(props: IconProps) {
  return (
    <Svg width="50%" height="50%" viewBox="0 0 27.808 18.539" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1={-0.282}
          y1={2.082}
          x2={-0.232}
          y2={2.047}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0.2} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__c"
          x1={-0.269}
          y1={2.033}
          x2={-0.244}
          y2={2.097}
        />
        <LinearGradient
          id="prefix__b"
          x1={-0.834}
          y1={4.162}
          x2={-0.808}
          y2={4.15}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0.071} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__d"
          x1={-0.494}
          y1={2.49}
          x2={-0.471}
          y2={2.479}
        />
        <LinearGradient
          id="prefix__e"
          x1={-0.089}
          y1={1.622}
          x2={-0.044}
          y2={1.591}
        />
      </Defs>
      <G data-name="laptop (1)">
        <Path
          data-name="Path 40"
          d="M27.229 15.067h-1.738V2.317A2.32 2.32 0 0023.174 0H4.635a2.32 2.32 0 00-2.318 2.317v12.75H.579a.579.579 0 00-.579.579v.579a2.32 2.32 0 002.317 2.317h23.174a2.32 2.32 0 002.317-2.317v-.579a.579.579 0 00-.579-.579z"
          fill="#303c42"
        />
        <Path
          d="M3.476 2.318a1.16 1.16 0 011.159-1.159h18.541a1.16 1.16 0 011.159 1.159v12.746H3.476z"
          fill="#5c6671"
          data-name="Group 32"
        />
        <Path
          d="M64 107.826a1.16 1.16 0 011.159-1.159H83.7a1.16 1.16 0 011.159 1.159v12.746H64z"
          transform="translate(-60.524 -105.508)"
          fill="url(#prefix__a)"
          data-name="Group 33"
        />
        <Path
          d="M64 107.826a1.16 1.16 0 011.159-1.159H83.7a1.16 1.16 0 011.159 1.159v12.746H64z"
          transform="translate(-60.524 -105.508)"
          fill="url(#prefix__c)"
          data-name="Group 34"
        />
        <Path
          data-name="Path 41"
          d="M25.491 17.381H2.318a1.16 1.16 0 01-1.159-1.159h9.609l.41.41a.579.579 0 00.41.17h4.637a.579.579 0 00.41-.17l.41-.41h9.609a1.16 1.16 0 01-1.163 1.159z"
          fill="#546e7a"
        />
        <Path
          data-name="Path 42"
          d="M64 113.619V111.3l4.635-4.635h2.317z"
          transform="translate(-60.524 -105.508)"
          fill="url(#prefix__b)"
        />
        <Path
          data-name="Path 43"
          d="M64 116.516l9.849-9.849h1.738L64 118.254z"
          transform="translate(-60.524 -105.508)"
          fill="url(#prefix__d)"
        />
        <Path
          data-name="Path 44"
          d="M27.229 100.4h-1.738V87.65a2.32 2.32 0 00-2.317-2.317H4.635a2.32 2.32 0 00-2.318 2.317v12.75H.579a.579.579 0 00-.579.579v.579a2.32 2.32 0 002.317 2.317h23.174a2.32 2.32 0 002.317-2.317v-.579a.579.579 0 00-.579-.579z"
          transform="translate(0 -85.333)"
          fill="url(#prefix__e)"
        />
      </G>
    </Svg>
  );
}
